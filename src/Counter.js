import React, { Component } from 'react';
import "./Counter.css"
import Label from "./Label"

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {value: 0}
    
  }

  add = () => {
    this.setState(currentState =>{
     return { value : currentState.value + 1}
    })
  }

  minus = () => {
    this.setState(currentState =>{
     return { value : currentState.value - 1}
    })
  }
  
  render() {
  
    return (
      <div className="counterContainer">
        <div className="nameTag">{this.props.name}</div>
        <Label value={this.state.value}/>
        <h1 className="big">{this.state.value}</h1>
          <div classname="buttonContainer">
            <button className="plus" onClick={this.add}>+</button>
            <button className="minus" onClick={this.minus}>-</button>
          </div>     
      </div>
    );
  }
}

export default Counter;
