import React from 'react'

export default function Card({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <div className="overflow-hidden shadow sm:rounded-md p-2">{children}</div>
    </div>
  )
}
