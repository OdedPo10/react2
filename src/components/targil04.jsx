import react, {Component} from 'react';

class Targil04 extends Component {
    state = {
        arr: ["hodi", "hila", "yahli", "yarden", "moris"],
        withStyle: true,
        type: 'button',
    } 

    render() { 
        return (
            <div>
                <input type="text" onKeyPress={(ev)=>this.keyPressHandle(ev)}/>
                <input type="checkbox" name="check" id="check" onChange={this.changeStyle} className="m-5" />
                <select name="typo" className='ms-3' onChange={(en)=>this.changeType(en)} >
                    <option value="button"> button </option>
                    <option value="h1"> h1 </option>
                    <option value="img"> img </option>
                </select>
                <br />
                {this.state.arr.map(name=>this.genrateElemant(name))}
            </div>
        );
    }
    genrateElemant(name){
        switch(this.state.type){
        case 'button':
        return<button key={name} className={ this.state.withStyle ? 'btn m-5 btn-success':this.getclasses(name) }>{name}</button>
        case 'h1':
        return<h1 key={name} >{name}</h1>
        case 'img':
        return<img src='jfhfxgjdfyjcgx' alt={name}/>
        }
    }


    changeStyle=()=>{
        this.state.withStyle= !this.state.withStyle;
        this.setState({withStyle : this.state.withStyle})
    }

    keyPressHandle(ev){
        if(ev.key=='Enter'){
        this.state.arr.push(ev.target.value)
        this.setState({arr: this.state.arr})
        ev.target.value='';
        }
    }
    getclasses(name) {
        return "btn m-5 btn-" + (name.includes("a") ? "dark" : "primary");
    }
    changeType=(en)=>{
        this.state.type=en.target.value;
        this.setState({type: this.state.type});

    }
}
export default Targil04;