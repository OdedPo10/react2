import React, { Component } from 'react';
import { DeleteItem } from './movies';
class Movie1 extends Component {
    state = { 
        movie: this.props.mov
     } 
    render() {
        return (
                <tr className={this.props.color}>
                    <td>{this.state.movie.name}</td>
                    <td> {this.state.movie.id}</td>
                    <td>{this.state.movie.genre}</td>
                    <td>{this.state.movie.length}</td>
                    <td> <button className='btn btn-danger' onClick={()=> this.props.del(this.props.mov.id)} > DELETE</button>   </td>
                    <td> <button className='btn btn-warning' onClick={()=> this.props.patch(this.props.mov.id)} > PATCH</button>   </td>
                </tr> 
        );
    }

}
 
export default Movie1;



