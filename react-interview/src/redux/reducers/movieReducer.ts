
import { movies } from '../../moviesData';
import { Movie, MovieStateRedux } from '../../types/types';
import { DELETE_MOVIE, HANDLE_LIKE } from '../constants/actionTypes';


const initState: MovieStateRedux = {
    movies: movies.map((movie: Movie) => {
        movie.dislikes += 1; //add our dislike
        return movie;
    })
};

const movieReducer = (state = initState, action: { type: string, id: string, isLiked: boolean }) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((movie: Movie) => movie.id !== action.id)
            }
        case HANDLE_LIKE:
            return {
                ...state,
                movies: state.movies.map((movie: Movie) => {
                    if (movie.id === action.id) {
                        movie.likes = action.isLiked ? movie.likes + 1 : movie.likes - 1;
                        movie.dislikes = !action.isLiked ? movie.dislikes + 1 : movie.dislikes - 1;
                    }
                    return movie;
                })
            }
        default:
            return state;
    }
}

export default movieReducer;