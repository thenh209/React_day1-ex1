import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let we see the output of javascript</h2>
        <button onClick={window['msg']}>Click to see alret message</button>
      </header>
    </div>
  );
}

export default App;
