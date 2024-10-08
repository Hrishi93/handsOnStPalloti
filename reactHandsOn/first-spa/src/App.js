import './App.css';
import ParentFC from './comps/ParentFC';
import ParentCC from './comps/ParentCC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello At St. Pallotti</h1>
        <Demo />
        <Demo1 />
        <ParentFC />
        <ParentCC />
      </header>
    </div>
  );
}

function Demo(){
  return(
  <h3>Hello in Demo as Functional Components</h3>
  //<SubDemo /> 
  );
}

function Demo1(){
  return(<p>
    <h3>Hello in Demo1 as Functional Components</h3>
  </p>);
}

export default App;
