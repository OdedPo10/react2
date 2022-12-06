let movies=[
    {
        id:1,
        name: 'die hard',
        genre: 'Action',
        length: '2:20'
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
];


export function getMovies(){
    return movies;
}

export function DeleteItem(id){
    movies= movies.filter(movie => movie.id !==id );
    return movies;
}

export function getMovie(id){
    return movies.find(m => m.id == id);
}