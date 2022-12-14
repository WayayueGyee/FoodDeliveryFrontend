import { InputHTMLAttributes, RefObject } from 'react'
import { regularText } from 'Styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerRef?: RefObject<HTMLInputElement>
}

export default function Input({ innerRef, ...props }: InputProps) {
  return (
    <input
      {...props}
      ref={innerRef}
      className={
        'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500' +
        regularText +
        ' ' +
        props.className
      }
    />
  )
}
