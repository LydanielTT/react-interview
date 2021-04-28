
import { movies } from '../../moviesData';
import { Movie, MovieStateRedux } from '../../types/types';
import { DELETE_MOVIE } from '../constants/actionTypes';


const initState: MovieStateRedux = { movies };

const movieReducer = (state = initState, action: { type: string, id: string }) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((movie: Movie) => movie.id !== action.id)
            }
        default:
            return state;
    }
}

export default movieReducer;