
import { Component } from 'react';
import './App.css';

 function Greet(props){
  return <h1>Hello, {props.name}</h1>;
}
class Greets extends Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}

  class App extends Component{
  
  render(){
    let dt=new Date();
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Hello world!</h1>  </header>
        <p>Current Date and Time </p>
        <p>{dt.toString()}</p>
        <Greet name="John"/>
        <Greet name="Doe"/>
        <Greet name="Smith"/>
        <p>Class Components </p>
        <Greets name="Alice"/>
        <Greets name="Bob"/>
        <Greets name="Charlie"/>
    </div>
  );
  }
}
export default App;

