import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './App.scss';
import FilterElement from './components/FilterElement/FilterElement';
import MovieElement from './components/MovieElement/MovieElement';
import PageHandlingElement from './components/PageHandlingElement/PageHandlingElement';
import SliceElement from './components/SliceElement/SliceElement';
import { getFilteredMovies } from './redux/selectors/movieSelectors';

const App = () => {
  const movies = useSelector(getFilteredMovies);
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovies - moviesPerPage;
  
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovies);
  
  const [moviesOnPage, setMoviesOnPage] = useState(currentMovies.length);

  useEffect(() => {
    setCurrentPage(1);
  }, [moviesPerPage])

  const handleDelete = () => {
    setMoviesOnPage(state => state - 1);
  }

  /*** 
   * trying to handle empty page on delete of all movies in a page
   ***/
  // useEffect(() => {
  //     setCurrentPage(1);
  // }, [moviesOnPage])
  
  return (
    <div className="App">
      <h1 className="header">Movies</h1>
      <a className="line" />
      <FilterElement />
      <SliceElement handleMoviesPerPage={e => setMoviesPerPage(parseInt(e))} />
      <div className="card-container">
        {currentMovies.map((movie) => {
          return (
            <MovieElement key={movie.id} {...movie} handleDelete={handleDelete}/>
          )
        })
        }
      </div>
      <PageHandlingElement pageMax={Math.ceil(movies.length / moviesPerPage)} handlePage={(page: number) => setCurrentPage(page)} />
    </div>
  );
}

export default App;
