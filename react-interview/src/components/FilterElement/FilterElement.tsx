import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterMovie, deleteMovie, removeFilterMovie } from '../../redux/actions/movieActions';
import { getAllMovies, getAllCategories } from '../../redux/selectors/movieSelectors';
import { Movie } from '../../types/types';
import './FilterElement.scss';

const FilterElement = () => {
  const movies: Movie[] = useSelector(getAllMovies);
  const movieCategories = useSelector(getAllCategories);

  const dispatch = useDispatch();

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.checked) {
      dispatch(addFilterMovie(e.target.value))
    } else {
      dispatch(removeFilterMovie(e.target.value))
    }
  }
  return (
    <div className="filter-container">
      {
        movieCategories.map((category, i) =>
        (<div key={i}>
          <input type="checkbox" name={category} id={category} value={category} onChange={handleCheckbox} />
          <label htmlFor={category}>{category}</label>
        </div>)
        )
      }

    </div>
  );
}

export default FilterElement;
