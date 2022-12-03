import Button from '../primitives/Button'
import Card from '../primitives/Card'
import FieldLabel from '../primitives/FieldLabel'
import InputField from '../primitives/InputField'
import Select from '../primitives/Select'

export default function RegistraionPage() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <Card>
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

                    <div className="col-span-6">
                      <InputField
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        labelText="Телефон"
                        placeholder="+7 (999) 999 99-99"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <InputField
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        labelText="Email"
                      />
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
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        labelText="Street address"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <InputField
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        labelText="City"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <InputField
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        labelText="State / Province"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <InputField
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        labelText=" ZIP / Postal code"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Button type="submit" style="primary">
                    Save
                  </Button>
                </div>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
