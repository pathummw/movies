import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export default function MovieInfo() {
    let params = useParams();
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect (() => {

        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
              /* setPopularFilms(data.results);
              setFilteredFilms(data.results); */
              setMovieInfo(data);
              console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
            
    }, [])

  return (
    <div>
        <h3> MovieInfo {params.id} </h3>
        <img 
            src={process.env.REACT_APP_POSTER_PATH + movieInfo.poster_path}
            alt="new"
            />

        <p>{movieInfo.overview}</p>

    </div>
    
  )
}
