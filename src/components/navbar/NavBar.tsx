import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Dropdown from 'components/primitives/dropdown/Dropdown'
import DropdownLink from 'components/primitives/dropdown/DropdownLink'
import NavBarLink from './NavBarLink'

const items = [
  { name: 'Меню', to: 'dish', current: true },
  { name: 'Заказы', to: 'order', current: false },
  { name: 'Корзина', to: 'basket', current: false },
]

// export function navBarLoader() {
//   TokenRepository.
// }

export default function NavBar() {
  return (
    <header className="w-screen fixed top-0 left-0">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* // TODO: break down into components */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0  p-2 items-center">
                    <span className="block font-bold text-white lg:hidden">Кушац</span>
                    <span className="hidden font-bold text-white lg:block">Delivery.Кушац</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="flex space-x-4">
                      {items.map((item) => (
                        // TODO: change to <Link>
                        <NavBarLink key={item.name} to={item.to}>
                          {item.name}
                        </NavBarLink>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>

                    <Dropdown>
                      <DropdownLink to="account/profile">Профиль</DropdownLink>
                      <DropdownLink to="account/logout">Выйти</DropdownLink>
                    </Dropdown>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {items.map((item) => (
                  <NavBarLink key={item.name} to={item.to}>
                    <Disclosure.Button
                      as="span"
                      className="block rounded-md text-base font-medium"
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </NavBarLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
