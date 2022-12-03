import { InputHTMLAttributes } from 'react'
import FieldLabel from './FieldLabel'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  labelText?: string
}

export default function InputField(props: InputProps) {
  const { labelText, ...otherProps } = props

  return (
    <div className="text-left">
      {props.name !== undefined && labelText !== undefined && (
        <FieldLabel htmlFor={props.name}>{labelText}</FieldLabel>
      )}
      <input
        key={2}
        {...otherProps}
        className={
          props.className ??
          'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        }
      />
    </div>
  )
}
