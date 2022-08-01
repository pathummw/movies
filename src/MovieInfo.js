import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './styles.css'
import YoutubeEmbed from './YoutubeEmbed';

export default function MovieInfo() {
    let params = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [embedId, setEmbedId] = useState([]);

    useEffect (() => {

        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`)
            .then((response) => response.json())
            .then((data) => {
              setMovieInfo(data);
              const videoArr = (data.videos.results);
              var videoObj = (videoArr.filter(obj => obj.name == 'Official Trailer' || obj.name == 'Trailer'))[0];
              if(videoObj.key) {
                setEmbedId(videoObj.key);
              } else {
                return;
              }
              console.log(videoObj.key)
            })
            .catch((err) => {
                console.log(err.message);
            });
            
    }, [])

    console.log(movieInfo.videos)

  return (
    <div>
        <h3> MovieInfo {params.id} </h3>
        <img 
            src={process.env.REACT_APP_BASE_URL + `/original` + movieInfo.backdrop_path}
            alt="new"
            className='imageMovie'
            />

        <p>{movieInfo.overview}</p>

        <YoutubeEmbed embedId={embedId} />
        

    </div>
    
  )
}