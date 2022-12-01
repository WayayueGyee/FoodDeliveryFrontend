import { HTMLInputTypeAttribute } from 'react'
import FieldLabel from './FieldLabel'

type InputProps = {
  type?: HTMLInputTypeAttribute
  name?: string
  id?: string
  autoComplete: string
  // TODO: change 'className' to 'fieldType' ('primary', 'secondary' and so on)
  className?: string
  labelText?: string
}

export default function InputField({
  type = 'text',
  name,
  id,
  autoComplete = 'given-name',
  className,
  labelText,
}: InputProps) {
  return (
    <div className="text-left">
      {name !== undefined && labelText !== undefined && (
        <FieldLabel name={name}>{labelText}</FieldLabel>
      )}
      <input
        key={2}
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        className={
          className ??
          'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        }
      />
    </div>
  )
}
