import Card from '@mui/material/Card';
import React from 'react'
import { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';

export default function MovieCard(props) {
    
  return (
    <Card >
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
        </CardContent>
        
    </Card>
  )
}
