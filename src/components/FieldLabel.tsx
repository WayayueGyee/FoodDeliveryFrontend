import { convNameAttrToText } from '../utils/string-convertions'

export default function FieldLabel({
  name,
  labelText,
  children,
}: {
  name: string
  labelText?: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {/* {labelText === undefined ? convNameAttrToText(name) : labelText} */}
      {children}
    </label>
  )
}
