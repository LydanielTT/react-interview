import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, handleLike } from '../../redux/actions/movieActions';
import { Movie } from '../../types/types';
import ProgressBar from '../ProgressBarElement/ProgressBarElement';
import ToggleLikeElement from '../ToggleLikeElement/ToggleLikeElement';
import './MovieElement.scss';

type Props = { handleDelete: () => void } & Movie;
const MovieElement: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { title, likes, dislikes, category, id, handleDelete } = props;

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleLike(id, e.target.checked));
  }
  const handleDeleteButton = () => {
    dispatch(deleteMovie(id));
    handleDelete();
  }
  return (
    <div className="movie-card">
      <h1>{title}</h1>
      <ProgressBar label={likes} completed={Math.floor(likes / (likes + dislikes) * 100)} />
      <ul>
        <li>Total reviews: {likes + dislikes}</li>
        <li>category: {category}</li>
      </ul>
      <ToggleLikeElement id={id} handleSwitch={handleSwitch} />
      <input
        className="delete-button"
        type="button"
        value="delete" onClick={handleDeleteButton} />
    </div>
  );
}

export default MovieElement;
