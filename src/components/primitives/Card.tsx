import React from 'react'

export default function Card({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="mt-5 sm:col-start-2 sm:col-end-6 sm:mt-0">
      <div className="bg-white overflow-hidden shadow-md rounded-md p-2">{children}</div>
    </div>
  )
}
