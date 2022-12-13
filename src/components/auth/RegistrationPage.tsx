import Input from 'components/primitives/Input'
import localforage from 'localforage'
import { TokenResponse, UserRegisterDTO } from 'models/Auth'
import { redirect, useFetcher } from 'react-router-dom'
import AuthService from 'services/AuthService'
import TokenService from 'services/TokenService'
import { regularText } from 'Styles'
import nameOf from 'utils/NameOf'
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
    localforage.setItem(TokenService.resolveTokenPropName(), data.token)
    localforage.setItem(
      nameOf((ud: UserRegisterDTO) => ud.email),
      userDto.email
    )

    return redirect('/dish')
  }

  return new Response('', {
    status: 500,
    statusText: 'Чёто хуйню высрал',
  })
}

export default function RegistrationPage() {
  const fetcher = useFetcher()

  return (
    <>
      <div className="mt-10 sm:mt-0">
        {/* <div className="md:grid md:grid-cols-3 md:gap-6"> */}
        <div className="mt-5 md:col-span-2 md:mt-0">
          <fetcher.Form action="#" method="post">
            <Card>
              <div className="bg-gray-50 px-4 py-3 rounded-md">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-full">
                    <LabeledInput
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      labelText="ФИО"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <LabeledInput
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      labelText="Email"
                    />
                  </div>

                  <div className="text-left col-span-6 sm:col-span-3">
                    <FieldLabel htmlFor="phone-number">Телефон</FieldLabel>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span
                        className={
                          'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500' +
                          regularText
                        }
                      >
                        +7
                      </span>
                      <Input
                        type="tel"
                        className={
                          'block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' +
                          regularText
                        }
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        placeholder="(999) 999 99-99"
                      />
                    </div>
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
              <div className="bg-gray-50 px-4 py-3 text-right rounded-md sm:px-6">
                <Button type="submit" style="primary">
                  Save
                </Button>
              </div>
              <Input></Input>
            </Card>
          </fetcher.Form>
        </div>
      </div>
    </>
  )
}
