import React, { Component } from "react";

class Pointer extends Component {
  state = {
    count: 0,
    names: ["hodi", "hila", "yahli", "yarden"],
  };

  style = {
    fontSize: 30,
  };

  // constructor(){
  //   super();
  //   this.handleIncrement =this.handleIncrement.bind(this)
  

  // }
  render() {
    return (
      <div>
        <h1 style={this.style} className={this.changeBG()}>{this.formatCount()}</h1>
        <button onClick={this.handleIncrement1}className="btn btn-success btn-sm">+</button>
        <button onClick={this.handleIncrement2}className="btn btn-danger btn-sm">-</button>
      </div>
    );
  }

  handleIncrement1=() =>{
    this.setState({count:this.state.count+1});
  }
  handleIncrement2=() =>{
    this.setState({count:this.state.count-1});
  }

  changeBG() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    return this.state.count === 0
      ? "zero"
      : this.state.count;
  }
}

export default Pointer;
