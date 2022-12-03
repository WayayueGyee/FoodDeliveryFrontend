import React, { LabelHTMLAttributes } from 'react'

// type FieldLabelProps = { name?: string; children?: React.ReactNode, props: LabelHTMLAttributes<HTMLElement> }

interface FieldLabelProps extends LabelHTMLAttributes<HTMLElement> {
  children?: React.ReactNode | React.ReactNode[]
}

export default function FieldLabel({ htmlFor, form, children }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} form={form} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}
