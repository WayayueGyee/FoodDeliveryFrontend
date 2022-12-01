import { HTMLInputTypeAttribute } from 'react'
import { convNameAttrToText } from '../utils/string-convertions'
import FieldLabel from './FieldLabel'

type InputProps = {
  type?: HTMLInputTypeAttribute
  name?: string
  id?: string
  // TODO: change 'className' to 'fieldType' ('primary', 'secondary' and so on)
  className?: string
  labelText?: string
}

export default function InputField({
  type,
  name,
  id,
  className,
  labelText,
}: InputProps) {
  const result: JSX.Element[] = []

  if (name !== undefined) {
    result.push(
      <FieldLabel key={1} name={name}>
        {labelText === undefined ? convNameAttrToText(name) : labelText}
      </FieldLabel>
    )
  }

  result.push(
    <input
      key={2}
      type={type}
      name={name}
      id={id}
      autoComplete="given-name"
      className={
        className ??
        'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
      }
    />
  )

  return <div className="text-left">{result.map((e: JSX.Element) => e)}</div>
}
