import Button from '../primitives/Button'
import Card from '../primitives/Card'
import DatePicker from '../primitives/DatePicker'
import FieldLabel from '../primitives/FieldLabel'
import InputField from '../primitives/InputField'
import Select from '../primitives/Select'

export default function RegistrationPage() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        {/* <div className="md:grid md:grid-cols-3 md:gap-6"> */}
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
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
                    <InputField
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      labelText="ФИО"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <InputField
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      labelText="Email"
                    />
                  </div>

                  <div className="text-left col-span-6 sm:col-span-2">
                    <FieldLabel htmlFor="phone-number">Телефон</FieldLabel>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3  sm:text-sm text-gray-500">
                        +7
                      </span>
                      {/* TODO: заменить input на мою компоненту с инпутом, обёрнутым в <></> */}
                      {/* TODO: унаследовать все тексты от одной компоненты, так как сейчас, чтобы изменить шрифт, нужно менять его в n местах */}
                      <input
                        type="tel"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        placeholder="(999) 999 99-99"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4  ">
                    <InputField
                      type="password"
                      name="current-password"
                      id="reg-current-password"
                      autoComplete="current-password"
                      labelText="Password"
                      placeholder="***************"
                    />
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
                    <InputField
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
            </Card>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
