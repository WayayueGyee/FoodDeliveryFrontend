import { InputHTMLAttributes } from 'react'
import FieldLabel from './FieldLabel'
import Input from './Input'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  labelText?: string
}

export default function LabeledInput(props: InputProps) {
  const { labelText, ...otherProps } = props

  return (
    <div className="text-left">
      {props.name !== undefined && labelText !== undefined && (
        <FieldLabel htmlFor={props.name}>{labelText}</FieldLabel>
      )}
      <Input {...otherProps} />
    </div>
  )
}
