import { ButtonHTMLAttributes } from 'react'
import { regularText } from 'Styles'

type ButtonStyle = 'primary' | 'secondary' | 'light' | 'dark' | 'link'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: ButtonStyle
}

const buttonStylesMap: Record<ButtonStyle, string> = {
  primary:
    'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm \
    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' +
    regularText,
  secondary:
    'ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 font-medium leading-4 text-gray-700 shadow-sm \
    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' +
    regularText,
  light: '',
  dark: '',
  link: '',
}

export default function Button({
  type = 'button',
  styleType = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={buttonStylesMap[styleType] + ' disabled:bg-indigo-400'}
    >
      {children}
    </button>
  )
}
