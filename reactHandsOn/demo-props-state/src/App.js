import './App.css';
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
