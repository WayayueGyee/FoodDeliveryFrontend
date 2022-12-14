import FieldLabel from './FieldLabel'
import Input, { InputProps } from './Input'

interface LabeledInputProps extends InputProps {
  isError?: boolean
  labelText?: string
}

export default function LabeledInput({
  innerRef,
  labelText,
  isError,
  ...props
}: LabeledInputProps) {
  // const { labelText, ...otherProps } = props

  return (
    <div className="text-left">
      {props.name !== undefined && labelText !== undefined && (
        <FieldLabel htmlFor={props.name}>{labelText}</FieldLabel>
      )}
      <Input innerRef={innerRef} className={isError ? '' : undefined} {...props} />
    </div>
  )
}
