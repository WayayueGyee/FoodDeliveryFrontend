type ButtonTypeAttribute = 'submit' | 'reset' | 'button' | undefined
type ButtonStyle = 'primary' | 'secondary' | 'light' | 'dark' | 'link'
type ButtonProps = {
  type?: ButtonTypeAttribute
  style?: ButtonStyle
  children?: React.ReactNode | React.ReactNode[]
}

const buttonStylesMap: Record<ButtonStyle, string> = {
  primary:
    'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
  secondary:
    'ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
  light: '',
  dark: '',
  link: '',
}

export default function Button({ type = 'button', style = 'primary', children }: ButtonProps) {
  return (
    <button type={type} className={buttonStylesMap[style]}>
      {children}
    </button>
  )
}
