import { Box } from '@mui/material';
import MovieCard from './MovieCard';
import { setGlobalState } from './state';


export default function Home(props) {

  setGlobalState('hideSearchBar', false);
  setGlobalState('openModal', false);

  return (
    <Box sx={{ display: 'flex',
              justifyContent:"center",
              bgcolor: '#FBFEFF',
          }}> 
            <Box sx={{display: 'flex',flexWrap: 'wrap',justifyContent:"center",}}>
            {
                props.filteredFilms && 
                props.filteredFilms.map(movie => (
                    <Box item key={movie.id} sx={{display: 'flex',justifyContent:'center',m:2, maxWidth:'100'}}>
                        <MovieCard id={movie.id} title={movie.title} poster={process.env.REACT_APP_POSTER_PATH + movie.poster_path} vote_average={movie.vote_average}/>
                    </Box>
                ))
            }
            </Box>
            
    </Box>
  )
}