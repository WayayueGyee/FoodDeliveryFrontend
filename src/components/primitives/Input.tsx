import { InputHTMLAttributes } from 'react'
import { regularText } from 'Styles'

export default function Input(props: InputHTMLAttributes<HTMLElement>) {
  return (
    <input
      className={
        'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500' +
        regularText
      }
      {...props}
    />
  )
}
