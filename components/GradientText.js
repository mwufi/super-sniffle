import React from 'react'

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  )
}

export default GradientText
