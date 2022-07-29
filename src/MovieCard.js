import Card from '@mui/material/Card';
import React from 'react'
import { useEffect, useState, useCallback } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function MovieCard(props) {

  const navigate = useNavigate();
  const handleCardClick = useCallback(() => navigate(`/movie/${props.id}`, {replace: true}), [navigate]);

  /* const handleCardClick = () =>{
    console.log("CLICKED: ", props.id)
  } */
    
  return (
    <Card onClick={handleCardClick}>
        <CardMedia
            component="img"
            image={props.poster}
            alt="movie poster"
            sx={{ width: 300, height: 450 }}
        />
        <CardContent>
            <Typography>
                {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.vote_average}
            </Typography>
        </CardContent>
        
    </Card>
  )
}
