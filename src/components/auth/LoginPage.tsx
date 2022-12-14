import DarkBackground from 'components/primitives/DarkBackground'
import ErrorText from 'components/primitives/ErrorText'
import TokenEvents from 'events/TokenEvents'
import { LoginCredsDTO, TokenResponse } from 'models/Auth'
import { useState } from 'react'
import { redirect, useFetcher } from 'react-router-dom'
import { dishesUrl } from 'routes/Routes'
import AuthService from 'services/AuthService'
import TokenService from 'services/TokenService'
import validator from 'validator'
import Button from '../primitives/Button'
import Card from '../primitives/Card'
import LabeledInput from '../primitives/LabeledInput'

// TODO: add loader which will set localStorage

export async function loginAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const loginDto = Object.fromEntries(formData) as unknown as LoginCredsDTO

  const response = await AuthService.login(loginDto)

  if (response.status >= 200 && response.status <= 299) {
    const data = response.data as TokenResponse
    TokenService.saveToken(data.token)
    TokenEvents.dispatch(TokenEvents.events.updated, 'Token updated')

    return redirect('/' + dishesUrl)
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function LoginPage() {
  const fetcher = useFetcher()
  const [isEmailError, setEmailError] = useState(false)
  const [isPasswordError, setPasswordError] = useState(false)

  const [isEmailEmpty, setEmailEmpty] = useState(false)
  const [isPasswordEmpty, setPasswordEmpty] = useState(false)

  const isEmpty = isEmailEmpty && isPasswordEmpty

  const validateEmail = (email: string) => {
    const isValid = validator.isEmail(email)

    if (isValid) {
      return isEmailError && setEmailError(false)
    }

    return !isEmailError && setEmailError(true)
  }

  const validatePassword = (password: string) => {
    const isValid = validator.isLength(password, {
      min: 6,
    })

    if (isValid) {
      return isPasswordError && setPasswordError(false)
    }

    return !isPasswordError && setPasswordError(true)
  }

  return (
    // TODO: components with their flags can be wrapped by the context
    <DarkBackground>
      <div
        style={{ height: 'calc(100vh - 64px)' }}
        className="flex items-center mt-10 mx-2 sm:mt-0 sm:mx-4"
      >
        <div className="md:grid md:grid-cols-6 w-screen md:gap-6">
          <Card>
            <div className="bg-gray-50 px-4 py-3 rounded-md">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <fetcher.Form action="#" method="post">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 md:col-span-4">
                    <LabeledInput
                      required
                      isError={isEmailError}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      labelText="Email"
                      onChange={(e) => {
                        e.target.value == '' ? setEmailEmpty(true) : setEmailEmpty(false)
                        validateEmail(e.target.value)
                      }}
                    />
                    <ErrorText isError={!isEmailEmpty && isEmailError} text="Неверный email" />
                    <ErrorText isError={isEmailEmpty} text="Пожалуйста, введите email" />
                  </div>

                  <div className="col-span-6 md:col-span-4">
                    <LabeledInput
                      required
                      isError={isPasswordError}
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      labelText="Password"
                      placeholder="***************"
                      onChange={(e) => {
                        e.target.value == '' ? setPasswordEmpty(true) : setPasswordEmpty(false)
                        validatePassword(e.target.value)
                      }}
                    />
                    <ErrorText
                      isError={!isPasswordEmpty && isPasswordError}
                      text="Пароль должен состоять минимум из 6 символов"
                    />
                    <ErrorText isError={isPasswordEmpty} text="Пожалуйста, введите пароль" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button
                  disabled={isEmailError || isPasswordError || isEmpty}
                  type="submit"
                  styleType="primary"
                >
                  Login
                </Button>
              </div>
            </fetcher.Form>
          </Card>
        </div>
      </div>
    </DarkBackground>
  )
}
