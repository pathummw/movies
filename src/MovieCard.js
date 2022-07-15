import Card from '@mui/material/Card';
import React from 'react'
import { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';

export default function MovieCard(props) {
    
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            image={props.poster}
            alt="movie poster"
        />
        
        <h3>{props.title}</h3>
    </Card>
  )
}
