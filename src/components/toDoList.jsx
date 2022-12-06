import React, { Component } from 'react';

class ToDoList extends Component {
    state={
        arr:[],
        lineTh: '', 
    }
    render() {
        return (
            <div className='bg-dark'>
            <div className='position-absolute top-50 start-50 translate-middle border border-danger text-white'>
                 <input type="text" onKeyPress={(ev)=>this.addMission(ev)}/>
                <div>
                <label>TO DO LIST:</label>
                    {this.state.arr.map((task,index)=>{
                        if(task.done){
                            return <p className={this.state.lineTh} key={index}>
                            <input checked={true}
                            type="checkbox" 
                            name="" 
                            id="rdbtn" 
                            onChange={
                                ()=>this.checkMission(index)
                            }/>{task.name}</p>}
                            else{
                                return <p key={index}>
                            <input checked={false}
                            type="checkbox" 
                            name="" 
                            id="rdbtn" 
                            onChange={
                                ()=>this.checkMission(index)
                            }/>{task.name}</p>
                            }
                        })}

                    
                
                </div>

            </div>
            </div>
        );
    }

        addMission(ev){
        if(ev.key=='Enter'){
        this.state.arr.push({name:ev.target.value,done:false})
        this.setState({arr: this.state.arr})
        ev.target.value='';
        }
        }

        checkMission(index){
            let missionDone = this.state.arr[index].done;
            const temp = this.state.arr;

            if(!missionDone){
                temp[index].done = true;
                this.setState(temp);
                this.state.lineTh='text-decoration-line-through'
                this.setState({lineTh: this.state.lineTh});
                
            }

            
        }
        
}

export default ToDoList;
