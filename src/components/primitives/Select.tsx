import { SelectHTMLAttributes } from 'react'
import { regularText } from 'Styles'

type SelectProps = SelectHTMLAttributes<string> & { options?: string[] }

export default function Select({ id, name, autoComplete, options }: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      autoComplete={autoComplete}
      className={
        'mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500' +
        regularText
      }
    >
      {options?.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  )
}
