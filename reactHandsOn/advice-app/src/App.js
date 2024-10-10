import './App.css';
import RandomAdvice from './comps/RandomAdvice';
import PerticularAdvice from './comps/PerticularAdvice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Advice Generator</h1>
       <RandomAdvice />
      </header>

      <header className="App-header1">
       <h1>Advice Generator (Selection)</h1>
       <PerticularAdvice />
      </header>
    </div>
  );
}

export default App;
