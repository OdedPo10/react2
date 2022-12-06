import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [
            { id: 1,value: 0 },
            { id: 2,value: 0 },
            { id: 3,value: 0 },
            { id: 4,value: 0 },
            { id: 5,value: 0 },
        ]
     }
     handleIncrement = Counter =>{
        console.log(Counter);
     }

     handelReset = () =>{
        let counters = this.state.counters.map(p => {p.value = 0; return p;});
        this.setState({ counters });
     }
     
     handleDelete = (countersId)=>{
        let counters = this.state.counters.filter(p => p.id !== countersId);
        this.setState({ counters })
     }

    render() { 
        return (<div>
            <button onClick={this.handelReset} className='btn btn-primary btn-sm m-2'>RESET</button>
            { this.state.counters.map(Counter => (
            <Counter 
            key={Counter.id} onDelete={this.handleDelete} onIncrememt={this.handleIncrement}practice={Counter}>
              <h4>hello</h4>
            </Counter>
            ))}
        </div>);
    }
}
 
export default Counters;