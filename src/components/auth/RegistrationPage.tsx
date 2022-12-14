import DarkBackground from 'components/primitives/DarkBackground'
import TokenEvents from 'events/TokenEvents'
import { TokenResponse, UserRegisterDTO } from 'models/Auth'
import { redirect, useFetcher } from 'react-router-dom'
import AuthService from 'services/AuthService'
import TokenService from 'services/TokenService'
import Button from '../primitives/Button'
import Card from '../primitives/Card'
import DatePicker from '../primitives/DatePicker'
import FieldLabel from '../primitives/FieldLabel'
import LabeledInput from '../primitives/LabeledInput'
import Select from '../primitives/Select'

export async function registrationAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  // TODO: add checking object type (optional 'cause type can be checked inside of component)
  const userDto = Object.fromEntries(formData) as unknown as UserRegisterDTO

  const response = await AuthService.register(userDto)
  // TODO: think about adding headers to request using decorators or smth like this
  // TODO: move status code check maybe in decorators
  if (response.status >= 200 && response.status <= 299) {
    const data = response.data as TokenResponse
    TokenService.saveToken(data.token)
    TokenEvents.dispatch(TokenEvents.events.updated, 'Token updated')

    return redirect('/dish')
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function RegistrationPage() {
  const fetcher = useFetcher()
  // Update context if context is choosen

  return (
    <>
      <DarkBackground>
        <div
          style={{ height: 'calc(100vh - 64px)' }}
          className="flex items-center mt-10 mx-2 sm:mt-0 sm:mx-4"
        >
          {/* TODO: maybe move grid wrapper to component */}
          <div className="md:grid md:grid-cols-6 w-screen md:gap-6">
            <Card>
              {/* TODO: move 'Personal info' to component */}
              <div className="bg-gray-50 px-4 py-3 rounded-md">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <fetcher.Form action="#" method="post">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-full">
                      <LabeledInput
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-name"
                        labelText="ФИО"
                        placeholder="Иванов Иван Иванович"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <LabeledInput
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        labelText="Email"
                        placeholder="user@example.com"
                      />
                    </div>

                    <div className="text-left col-span-6 sm:col-span-3">
                      <LabeledInput
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        labelText="Телефон"
                        placeholder="+7 (999) 999 99-99"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4  ">
                      <div className="text-lg">
                        <LabeledInput
                          type="password"
                          name="current-password"
                          id="reg-current-password"
                          autoComplete="current-password"
                          labelText="Password"
                          placeholder="***************"
                        />
                      </div>
                    </div>

                    <div className="text-left col-span-6 sm:col-span-3">
                      <DatePicker></DatePicker>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <div className="text-left">
                        <FieldLabel htmlFor="sex">Пол</FieldLabel>
                        <Select id="sex" name="sex" options={['Мужчина', 'Женщина']} />
                      </div>
                    </div>

                    <div className="col-span-6">
                      <LabeledInput
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address-level1"
                        labelText="Адрес"
                      />
                    </div>
                  </div>
                </div>
              </fetcher.Form>
              <div className="bg-gray-50 px-4 py-3 text-right rounded-md sm:px-6">
                <Button type="submit" styleType="primary">
                  Save
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </DarkBackground>
    </>
  )
}
