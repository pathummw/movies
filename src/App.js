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
        .then((data) => setPopularFilms(data.results))
        .catch((err) => {
            console.log(err.message);
        });

        console.log(popularFilms)

        console.log(searchText)
        setFilteredFilms(popularFilms)
 }, [])

  const searchedText = (text) => {
    console.log("From App: "+ text)
    setSearchText(text)
    if(text != ''){
      const result = popularFilms.filter(el => el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
      setFilteredFilms(result)
      console.log(result)
    } else {
      setFilteredFilms(popularFilms)
    }
    
    
  }
  return (
    <div>
      <Navbar searchedText={searchedText} />
      <Home filteredFilms={filteredFilms} />
    </div>
  );
}

export default App;
