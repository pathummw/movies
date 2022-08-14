import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import './styles.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { setGlobalState } from './state';
import BasicModal from './BasicModal';


export default function MovieInfo() {
  let params = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [embedId, setEmbedId] = useState([]);

  const testRef = useRef(null);
  const onClickWatchTrailer = () => {
    setGlobalState('openModal', true);
  };

  setGlobalState('hideSearchBar', true)

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`)
      .then((response) => response.json())
      .then((data) => {
        setMovieInfo(data);
        const videoArr = (data.videos.results);
        var videoObj = (videoArr.filter(obj => obj.name == 'Official Trailer' || obj.name == 'Trailer'))[0];
        if (videoObj.key) {
          setEmbedId(videoObj.key);
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, [])

  return (
    <div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          bgcolor: '#FBFEFF',
          p: 5,
          minWidth: 300,
          justifyContent: "center",
        }} >


        <Card sx={{ maxWidth: "60vw" }}>
          <CardMedia
            component="img"
            alt="movie banner"
            height="auto"
            image={process.env.REACT_APP_BASE_URL + `/original` + movieInfo.backdrop_path}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movieInfo.overview}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onClickWatchTrailer}>Watch Trailer</Button>
          </CardActions>

        </Card>




      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          bgcolor: '#FBFEFF',
          p: 5,
          minWidth: 300,
          justifyContent: "center",
        }}
        ref={testRef}
      >
      </Box>

      <BasicModal embedId={embedId}/>

    </div>

  )
}