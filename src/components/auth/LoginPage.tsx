import DarkBackground from 'components/primitives/DarkBackground'
import localforage from 'localforage'
import { LoginCredsDTO, TokenResponse } from 'models/Auth'
import { redirect, useFetcher } from 'react-router-dom'
import AuthService from 'services/AuthService'
import TokenService from 'services/TokenService'
import nameOf from 'utils/NameOf'
import Button from '../primitives/Button'
import Card from '../primitives/Card'
import LabeledInput from '../primitives/LabeledInput'

export async function loginAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  // TODO: add checking object type (optional 'cause type can be checked inside of component)
  const loginDto = Object.fromEntries(formData) as unknown as LoginCredsDTO
  console.log('LOGIN_DTO: ', loginDto)

  const response = await AuthService.login(loginDto)

  if (response.status >= 200 && response.status <= 299) {
    const data = response.data as TokenResponse
    await localforage.setItem(TokenService.resolveTokenPropName(), data.token)
    await localforage.setItem(
      nameOf((ud: LoginCredsDTO) => ud.email),
      loginDto.email
    )

    return redirect('/dish')
  }

  return new Response('', {
    status: 500,
    statusText: 'Чёто хуйню высрал',
  })
}

export default function LoginPage() {
  const fetcher = useFetcher()
  // const fd = useActionData()

  return (
    // TODO: Change visuals, make horizontal center align
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
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      labelText="Email"
                    />
                  </div>

                  <div className="col-span-6 md:col-span-4">
                    <LabeledInput
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      labelText="Password"
                      placeholder="***************"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button type="submit" style="primary">
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
