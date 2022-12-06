import React, { Component } from "react";

class Buttons extends Component {
  state = {
    arr: ["hodi", "hila", "yahli", "yarden", "moris"],
  };

  render() {
    return (
    <div>
        <input id="inp" type="text" />
        <button onClick={this.addMyName} className="btn btn-success m-5">submit</button>
        <input type="radio" name="" id="check"  />
        
          <select name="" className="btn btn-danger dropdown-toggle m-5" id="dropdown">
            <option value="btn">Button</option>
            <option value="lab">Label</option>
            <option value="par">Paragraph</option>
            <option value="hedline">Headline</option>
          </select>
        
        {this.state.arr.map((name,index) =>
         (<button
         key={index}
         
         className={this.getclasses(name)}
         >{name}</button>
        ))}
    </div>
    );
  }

  getclasses(name) {
    return "btn m-5 btn-" + (name.includes("a") ? "dark" : "primary");
  }
  addMyName=()=>{
    this.state.arr.push(document.getElementById('inp').value)

    this.setState({arr:this.state.arr})

  }
 
}


export default Buttons;


