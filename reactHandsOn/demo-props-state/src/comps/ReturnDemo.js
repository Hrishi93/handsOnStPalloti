import React from 'react'

export default function ReturnDemo(props) {
  return (
    <div>
        <p>Hello : {props.fname}   {props.lname}</p>
    </div>
  )
}
// function is going to return property only
// combine element and property