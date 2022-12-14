import { InputHTMLAttributes } from 'react'
import FieldLabel from './FieldLabel'
import Input from './Input'

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
  labelText?: string
}

export default function LabeledInput({ labelText, isError, ...props }: LabeledInputProps) {
  // const { labelText, ...otherProps } = props

  return (
    <div className="text-left">
      {props.name !== undefined && labelText !== undefined && (
        <FieldLabel htmlFor={props.name}>{labelText}</FieldLabel>
      )}
      <Input className={isError ? '' : undefined} {...props} />
    </div>
  )
}
