import TokenEvents from 'events/TokenEvents'
import { useEffect, useState } from 'react'
import TokenService from 'services/TokenService'

const useAuth = () => {
    const [isAuthorized, setAuthorized] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        TokenEvents.subscribe(TokenEvents.events.expired, () => {
            TokenService.saveToken(null)
            setAuthorized(false)
        })
        TokenEvents.subscribe(TokenEvents.events.updated, () => setAuthorized(true))

        if (!isAuthorized) {
            TokenService.getToken().then((res) => {
                console.log('TOKEN SUKA: ', res)
                if (res) setAuthorized(true)
            })
        }

        return () => {
            TokenEvents.unsubscribe(TokenEvents.events.expired, () => setAuthorized(false))
            TokenEvents.unsubscribe(TokenEvents.events.updated, () => setAuthorized(true))
        }
    }, [])

    return isAuthorized
}

export default useAuth
