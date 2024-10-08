import React from 'react'

export default function ParentFC() {
  return (
    <div>
      <h2>Welcome at Parent as functional Components</h2>
      <SubParent />
    </div>
  )
}



function SubParent() {
  return (
    <div>
      <h3>Sub Parent</h3>
    </div>
  )
}
