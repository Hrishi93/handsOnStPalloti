import React from 'react'
import './App.css'

export default function EmployeeDetails(props){
  return(
    <div>
      <h1>Employee Details</h1>
      <p>Employee Name : {props.employee.name}</p>
      <p>Employee City : {props.employee.city}</p>
      <p>Employee Age : {props.employee.age}</p>
      <p>Employee Salary : {props.employee.salary}</p>
    </div>
  );
}