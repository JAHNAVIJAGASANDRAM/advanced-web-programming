import logo from './logo.svg';
import './App.css';

function App() {
  let dt=new Date();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello world!</h1>
      </header>
      <p>Current Date and Time is {dt.toLocaleString()}</p>
      <p>Current Date and Time is</p>
        <p>{dt.toString()}</p>
      
        

      
    </div>
  );
}

export default App;
