import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/actions/movieActions';
import { Movie } from '../../types/types';
import ProgressBar from '../ProgressBarElement/ProgressBarElement';
import './MovieElement.scss';

type Props = Movie;
const MovieElement: React.FC<Props> = (movie) => {
  const dispatch = useDispatch();

  const { title, likes, dislikes, category, id} = movie;
  return (
    <div className="movie-card">
      <h1>{title}</h1>
      <ProgressBar label={likes} completed={Math.floor(likes / (likes + dislikes) * 100)}/>
      <ul>
        <li>Total reviews: {likes + dislikes}</li>
        {/* <li>id: {movie.id}</li> */}
        {/* <li>title: {title}</li> */}
        {/* <li>like: {likes}</li>
        <li>dislikes: {dislikes}</li> */}
        <li>category: {category}</li>
      </ul>
      <input 
        type="button"
        value="delete" onClick={() => dispatch(deleteMovie(movie.id))} />
    </div>
  );
}

export default MovieElement;
