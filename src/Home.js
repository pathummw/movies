import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';


export default function Home() {
    const [data, setData] = useState([]);
    useEffect (() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((err) => {
                console.log(err.message);
            });
     }, [])

  return (
    <div>      
        <ul>
            
            {
                data && 
                data.map(movie => (
                    <li key={movie.id} >
                        <MovieCard title={movie.title} poster={process.env.REACT_APP_POSTER_PATH + movie.poster_path}/>
                    </li>
                ))
            }
            
        </ul>
    </div>
  )
}
