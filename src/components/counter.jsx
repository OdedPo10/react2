import React, { Component } from 'react';
class Counter extends Component { 
  state = {
    value: this.props.value,
  }
  handleIncrement = () =>{
    this.setState({ value: this.state.value +1 });
  }
    render() { 
        return (
          <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=> this.state.onIncrement(this.state.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm m-3'>Decrement</button>
            <button onClick={()=>this.state.onDelete(this.state.counter.id)} className='btn btn-danger btn-sm'>DELETE</button>

          </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge text-bg-";
        classes += this.state.value === 0 ? "warning m-2" : "primary m-2";
        return classes;
    }

    formatCount(){
        const { count } = this.state.counter;
        return count === 0 ? 'zero' : count; //[A SHORTER WAY TO WRITE IT DOWN]
        // return this.state.value === 0 ? 'Zero' : this.state.value;
    }
}

 
export default Counter;