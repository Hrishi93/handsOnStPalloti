import React from 'react'

export default function DemoProps(props) {
  return (
    <div>
      {props.studentName}
      {props.studentAge}
      {props.branch}
    </div>
  )
}
