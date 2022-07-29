import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, Box,  } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';


export default function Home(props) {

  return (
    <Container> 
            <Grid container spacing={3}>
            {
                props.filteredFilms && 
                props.filteredFilms.map(movie => (
                    <Grid item key={movie.id} >
                        <MovieCard id={movie.id} title={movie.title} poster={process.env.REACT_APP_POSTER_PATH + movie.poster_path} vote_average={movie.vote_average}/>
                    </Grid>
                ))
            }
            </Grid>
            
    </Container>
  )
}
