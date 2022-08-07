import Card from '@mui/material/Card';
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { setGlobalState } from './state';

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  width: "300px",
  cursor: 'pointer'
};
const ratingStyle = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  background: '',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function MovieCard(props) {

  const navigate = useNavigate();

  const onClickCard = () => {
    setGlobalState('hideSearchBar', true)
    navigate(`/movie/${props.id}`);
  }
  return (
    <Card onClick={onClickCard} style={cardStyle} >
        <CardMedia
            component="img"
            image={props.poster}
            alt="movie poster"
            sx={{ width: 300, height: 450 }}
        />
        <CardContent sx={{maxWidth: '300',overflow:'hidden'}}>
            <Typography variant="subtitle1" align='center'>
                {props.title}
            </Typography>
            <Typography sx={[
              { mb: 1.5 
              },
              props.vote_average > 4  && {
                border: '4px solid #F8D407',
              },
              props.vote_average > 7  && {
                border: '4px solid #5AB834',
              }
            ]} 
              color="text.secondary" variant="subtitle2" style={ratingStyle}>
              {props.vote_average}
            </Typography>
        </CardContent>
        
    </Card>
  )
}