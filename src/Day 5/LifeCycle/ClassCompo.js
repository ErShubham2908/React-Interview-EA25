import React, { Component } from 'react'
import Child from './Child';

class ClassCompo extends Component {
    // Constructor
    constructor(){
        super();
        console.log('1. This is constructor... ');
        this.state = {
            count : 0, 
            change : true
        }
    }

    componentDidMount(){
        console.log('3. This is componentDidMount...');
    }

  render() {
    console.log('2. This is Render....');
    return (
      <>    
        <h2>Count : {this.state.count}</h2>
        <Child data = {this.state.count} />
        {this.state.change ? <UnmountData /> : ""}
        <button onClick={() => this.setState({count: this.state.count + 1})} >increment</button> <br />
        <button onClick={() => this.setState({change : !this.state.change})} >Toggle</button>
      </>
    )
  }
}

export default ClassCompo;

// unmounting Phase
class UnmountData extends Component{
    componentWillUnmount(){
        alert('Component Remove from DOM....')
    }
    render(){
        return(
            <>
                <h1>This is Unmouting Compo</h1>
            </>
        )
    }
}
