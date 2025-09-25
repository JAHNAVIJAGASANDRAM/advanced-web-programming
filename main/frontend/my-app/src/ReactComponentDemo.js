
import React,{ Component,useState,useEffect } from 'react';
class ClassLifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being constructed");
  }

 static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Component is receiving new props");
    return null; 
  }
  static shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding whether to update the component");
    return true; 
  }
    componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing snapshot before update");
    return null; 
  }
    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has been updated");
    }
    componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
    }
    increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
    console.log("render: Rendering the component");
    return (
      <div  style={{ textAlign: 'center',padding:'10px' ,marginTop: '20px', border: '1px solid green'
 }}>

        <h1>Class Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
function FunctionalLifecycleDemo() {
  const [count, setCount] = useState(0);
    useEffect(() => {
    console.log("useEffect: Component has been mounted or updated");
    return () => {
      console.log("useEffect Cleanup: Component is about to be unmounted or updated");
    }
    }, [count]);
    const increment = () => {
    setCount(count + 1);
    };
    return (
        <div style={{ textAlign: 'center',padding:'10px' ,marginTop: '20px', border: '1px solid blue'
    }}>
            <h1>Functional Lifecycle Demo</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

function ReactComponentDemo(){
    const [count,setCount]=useState(0);
   
    return (
        <div className="react-component-demo">
            <h1>React Component Lifecycle Demo</h1>
            <ClassLifecycleDemo />
            <FunctionalLifecycleDemo />
           
        </div>  

    );



}
export default ReactComponentDemo;