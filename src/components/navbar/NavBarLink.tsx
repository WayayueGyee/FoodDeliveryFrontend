import { NavLink, NavLinkProps, useMatch, useResolvedPath } from 'react-router-dom'

type NavLinkType = NavLinkProps & React.RefAttributes<HTMLAnchorElement>

export default function NavBarLink({ to, children, ...props }: NavLinkType) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname })

  return (
    <NavLink
      key={props.key}
      to={to}
      className={
        props.className
          ? props.className
          : ({ isActive, isPending }) => {
              const generalStyle = 'px-3 py-2 block rounded-md text-sm font-medium '
              let additionalStyle = ''

              if (isActive) {
                additionalStyle = 'bg-gray-900 text-white'
              } else if (isPending) {
                additionalStyle = 'text-white'
              } else {
                additionalStyle = 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }

              return generalStyle + additionalStyle
            }
      }
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </NavLink>
  )
}
