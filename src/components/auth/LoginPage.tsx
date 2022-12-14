import { UserInfoContext } from 'App'
import DarkBackground from 'components/primitives/DarkBackground'
import ErrorText from 'components/primitives/ErrorText'
import TokenEvents from 'events/TokenEvents'
import { LoginCredsDTO, TokenResponse } from 'models/Auth'
import { useContext, useState } from 'react'
import { Navigate, redirect, useActionData, useFetcher } from 'react-router-dom'
import { apiUrl } from 'routes/RequestRoutes'
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
  const [isEmpty, setEmpty] = useState(true)

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
                      required={true}
                      isError={isEmailError}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      labelText="Email"
                      onChange={(e) => {
                        e.target.value == '' ? setEmpty(true) : setEmpty(false)
                        validateEmail(e.target.value)
                      }}
                    />
                    {isEmailError && <ErrorText text="Please enter an email" />}
                  </div>

                  <div className="col-span-6 md:col-span-4">
                    <LabeledInput
                      required={true}
                      isError={isPasswordError}
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      labelText="Password"
                      placeholder="***************"
                      onChange={(e) => {
                        e.target.value == '' ? setEmpty(true) : setEmpty(false)
                        validatePassword(e.target.value)
                      }}
                    />
                    {isPasswordError && <ErrorText text="Please choose a password" />}
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
