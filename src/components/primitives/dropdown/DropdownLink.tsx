import { Menu } from '@headlessui/react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '../../../utils/class-names'

export default function DropdownLink({ to, children, ...props }: LinkProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          {...props}
          to={to}
          className={
            props.className ??
            classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')
          }
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  )
}
