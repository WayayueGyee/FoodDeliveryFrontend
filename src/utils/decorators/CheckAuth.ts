import { AxiosResponse } from 'axios'
import { UnauthorizedError } from 'errors/HttpErrors'
import TokenEvents from 'events/TokenEvents'
import { redirect } from 'react-router-dom'
import HttpStatusCode from 'utils/HttpStatusCode'

const checkAuth = (redirectUrl?: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        return {
            get() {
                const wrapper = async (...args: any[]): Promise<AxiosResponse<any, any>> => {
                    return propertyDescriptor.value
                        .apply(this, args)
                        .then((response: AxiosResponse<any, any>) => {
                            if (response.status !== HttpStatusCode.UNAUTHORIZED) {
                                return response
                            }

                            TokenEvents.dispatch(TokenEvents.events.expired, 'Token expired')

                            if (redirectUrl) {
                                return redirect(redirectUrl)
                            }

                            throw new UnauthorizedError(
                                `Request responded with status "${
                                    HttpStatusCode[response.status]
                                } ${response.data ? `and data ${response.data}` : ''}"`
                            )
                        })
                }

                Object.defineProperty(this, memberName, {
                    value: wrapper,
                    configurable: true,
                    writable: true,
                })

                return wrapper
            },
        }
    }
}

export default checkAuth
