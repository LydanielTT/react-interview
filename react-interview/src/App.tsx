import React from 'react';
import { useSelector } from 'react-redux';

import './App.scss';
import FilterElement from './components/FilterElement/FilterElement';
import MovieElement from './components/MovieElement/MovieElement';
import { getFilteredMovies } from './redux/selectors/movieSelectors';

const App = () => {
  const movies = useSelector(getFilteredMovies);


  return (
    <div className="App">
      <h1 className="header">Movies</h1>
      <a className="line"/>
      <FilterElement />
      <div className="card-container">
        {movies.map((movie) => {
          return (
            <MovieElement key={movie.id} {...movie} />
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
