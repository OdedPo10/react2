import React, {Component } from 'react';
import Movie1 from "../components/movie1";

class Movies extends Component {
    state = { 
        movies:[
            {
                id:1,
                name: 'die hard',
                genre: 'Action',
                length: '2:20',
            },
            {
                id:2,
                name: 'Shutter Island',
                genre: 'Mystery',
                length: '2:30'
            },
            {
                id:3,
                name: 'The Prestige',
                genre: 'Action',
                length: '2:20'
            },
            {
                id:4,
                name: 'Departed',
                genre: 'Action',
                length: '2:40'
            }
        ],
        colors:['alert alert-danger','alert alert-success','alert alert-warning','alert alert-info']
        
     } 
      alerty=(id)=>{
        if(id%4==1)
        return this.state.colors[0];
        else if(id%4==2)
        return this.state.colors[1];
        else if(id%4==3)
        return this.state.colors[2];
        else 
        return this.state.colors[3];
      }  
    
    render() { 
        if(this.state.movies.length ==0 )
            return <p className='ms-3'> there are no movies left </p>
        return (   
            <React.Fragment>
            <p className='ms-3' > there are {this.state.movies.length}  Movies</p>
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Genre</th>
                    <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie=>(
                <Movie1 key={movie.id} mov={movie} del={this.deletRow} patch={this.updateItem} color={this.alerty(movie.id)}/>


                ))}
                </tbody>
            </table>
            </React.Fragment>
        );

      
    }
    deletRow=(id)=>{
        let arr=this.state.movies.filter(val =>val.id!==id)
        this.setState({movies: arr})
    }

    updateItem=(id)=>{
        let arr = this.state.movies.map(movie => {
            if (id===movie.id)
                movie.name='null'
            return movie
        });
        this.setState({movies: arr});
    }

  

}
 
export default Movies;



