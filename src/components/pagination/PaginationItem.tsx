import { NavLink } from 'react-router-dom'

interface PaginationItemProps {
  text: string
}

export default function PaginationItem({ text }: PaginationItemProps) {
  return (
    <NavLink
      to="#"
      aria-current="page"
      className="relative inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
    >
      {text}
    </NavLink>
  )
}
