import IconProps from './icons'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function ProfileIcon({ title, titleId, ...props }: IconProps) {
  return (
    <UserCircleIcon
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
    </UserCircleIcon>
  )
}
