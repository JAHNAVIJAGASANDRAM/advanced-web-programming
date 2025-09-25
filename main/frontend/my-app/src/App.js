
import { Component,useState,useEffect } from 'react';
import './App.css';
import ReactComponentDemo from './ReactComponentDemo';
import Calculator from './Calculator';
import Registration from './Registration';



 function Greet(props){
  return <h1>Hello, {props.name}</h1>;
}
class Greets extends Component{
 
  render(){
    return (
    <><h2>Welcome to {this.props.name}</h2></>
  );
  }
}

class DisplayDate extends Component{
  constructor(){
    super();
    this.state={date:new Date()};
  }
  render(){
    return (
      <p>{this.state.date.toString()}</p>
    );
  }
}

  function App() {
  
  const [count,setCount]=useState(0);
  const [showRegistration, setShowRegistration] = useState(false);

  

    const dt=new Date();
    
    const time=dt.toDateString();
   
    function showTime(){
      
      alert(time);
    }
    const Goodbye = () => {
    alert("Goodbye");
  };


  return (
    
    <div className="App">
     <header className="App-header"> 
        <h1>Hello world!</h1> 
        <p>Current Date and Time </p>
        <p>{dt.toString()}</p>
        <Greet name="John"/>
        <Greet name="Doe"/>
        <Greet name="Smith"/>
        <p>Class Components </p>
        <Greets name="Class Component"/>
        <DisplayDate/>
        <button onClick={showTime}>Get Time</button>
        
        
        <button onClick={Goodbye}>message</button>
        <p>React Component Demo</p>
        <ReactComponentDemo/>
        <p>open calculator</p>
        <Calculator/>
        <p>click below to register</p>
         <button onClick={() => setShowRegistration(true)}>Register</button>
      {showRegistration && <Registration />}

        </header>
    </div>
  );
  }

export default App;

