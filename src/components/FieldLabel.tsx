import React from 'react'

type FieldLabelProps = { name: string; children: React.ReactNode }

export default function FieldLabel({ name, children }: FieldLabelProps) {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}
