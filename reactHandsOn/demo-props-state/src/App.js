import React from 'react'
import ReturnDemo from './comps/ReturnDemo';
import StateCC from './comps/StateCC';
export default function App() {
  //return <h1>APP returning the Single Element</h1>
  return (
    <div>
      <h1>App returning the JSX</h1>
      <h2>Hello in H2</h2>
      <ReturnDemo fname="Ram" lname="Kumar"/>
      <StateCC />
    </div>
  );
}
//app return element


/*import React from 'react';
import './App.css';
import CounterFC from './Counter/CounterFC';

export default function App() {
  return (
    <div className='App'>
      <h1>Counter UI</h1>
      <CounterFC />
    </div>
  )
}


/*
// State in COmponent 

import React from 'react';
import './App.css'
import StateCC from './comps/StateCC';

export default function App() {
  return (
    <div className='App'>
      <h1>Demo of State</h1>
      <StateCC />
    </div>
  )
}



/*
//Object as Props

import React from 'react'
import EmployeeDetails from './comps/EmployeeDetails';

function App() {

  const employee ={
    name: 'John Doe',
    age:24,
    city: 'NYC',
    salary: 25000
  };

  return <EmployeeDetails employee={employee} />
}


export default App;



/*;
import DemoProps from './comps/DemoProps';
import DemoPropsCC from './comps/DemoPropsCC';

function App() {
  return (
    <div className="App">
     <h2>Demo Props and State</h2>
     <h3>College Name : <Props collegeName="St. Vincent Palloti " city="Nagpur"/></h3>
     <table border="3px">
        <tr>
          <th>Student Name</th>
          <th>Age</th>
          <th>Branch</th>
          </tr>  
        <tr>
            <td><DemoProps studentName="Ram Kumar" /></td>
            <td><DemoProps studentAge="23"></DemoProps></td>
            <td><DemoProps branch="CSE"></DemoProps></td>
        </tr>
        <tr>
            <td><DemoProps studentName="Shyam Kumar" /></td>
            <td><DemoProps studentAge="22"></DemoProps></td>
            <td><DemoProps branch="EXTC"></DemoProps></td>
        </tr>
        <tr>
            <td><DemoProps studentName="Bhushan sahur" /></td>
            <td><DemoProps studentAge="23"></DemoProps></td>
            <td><DemoProps branch="IT"></DemoProps></td>
        </tr>
     </table>
     <p>---------------------------------</p>
     <p>Teacher Name: <DemoPropsCC teacherName="Dr. Sen"/></p>
     <p>Subject Name: <DemoPropsCC subject="DBMS"/></p>
    </div>
  );
}

function Props(props){
  return(
    <div>
      {props.collegeName}
      {props.city}
    </div>
  );
}
export default App;
*/