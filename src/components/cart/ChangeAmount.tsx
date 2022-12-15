import React from 'react'

export default function ChangeAmount({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={
        'inline-flex items-center border border-gray-200 bg-gray-50 p-2 text-sm text-gray-500 focus:z-20' +
        ' ' +
        className
      }
    >
      {children}
    </div>
  )
}
