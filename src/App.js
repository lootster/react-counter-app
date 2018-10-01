import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  state = {
    names: [
      "Xin Fang", 
      "Brian",
      "Calvin", 
      "Sebestian", 
      "sheldon", 
      "KaiXin",
      "Delphine",
      "huimin",
      "Tim",
      "Shun"
    ]
  }


  render() {
    return (
      <div className="App">
        {this.state.names.map(name => <Counter name={name}/>)}
      </div>
    );
  }
}

export default App;
