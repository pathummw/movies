import Home from './Home';
import Navbar from './Navbar';
import '../src/styles.css'
import { useState, useEffect} from 'react';

function App() {

  const [searchText, setSearchText] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect (() => {

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            setPopularFilms(data.results);
            setFilteredFilms(data.results);
          })
          .catch((err) => {
              console.log(err.message);
          });
          
  }, [])


  const searchedText = (text) => {
    setSearchText(text);
    if(text != ''){
      const result = popularFilms.filter(el => el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
      setFilteredFilms(result);
    } else {
      setFilteredFilms(popularFilms);
    }
  }

  const filterByRatings = (e) => {  
    if(e > 0) {
      const cloneOfPopularFilms = [...popularFilms];
      const result = cloneOfPopularFilms.sort((a,b) => a.vote_average - b.vote_average);
      setFilteredFilms(result);
    } else {
      setFilteredFilms(popularFilms);
    }
  }

  return (
    <div>
      <Navbar searchedText={searchedText} filterByRatings={filterByRatings} />
      <Home filteredFilms={filteredFilms} />
    </div>
  );
}

export default App;
