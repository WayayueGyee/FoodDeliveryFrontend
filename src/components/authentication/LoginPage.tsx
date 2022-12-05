import Button from '../primitives/Button'
import Card from '../primitives/Card'
import InputField from '../primitives/InputField'

export default function LoginPage() {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card>
          <div className="md:col-span-1 bg-gray-50 px-4 py-3 rounded-md">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <form action="#" method="POST">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <InputField
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    labelText="Email"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <InputField
                    type="password"
                    name="current-password"
                    id="current-password"
                    autoComplete="current-password"
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
          </form>
        </Card>
      </div>
    </div>
  )
}
