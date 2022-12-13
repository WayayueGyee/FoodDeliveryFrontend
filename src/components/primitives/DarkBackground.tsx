import React from 'react'

export default function DarkBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(25, 33, 54, 0.5)',
        height: `calc(100vh - 64px)`,
      }}
      className="overflow-hidden, w-full"
    >
      {children}
    </div>
  )
}
