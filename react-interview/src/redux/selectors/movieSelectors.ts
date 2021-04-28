import { Movie } from '../../types/types'

export const getAllMovies = (state: { movieReducer: { movies: Movie[] } }) => state.movieReducer.movies;

export const  getAllCategories = (state: { movieReducer: { movies: Movie[] } }) =>
    state.movieReducer.movies
        .map((movie: Movie) => movie.category)
        .reduce((unique: string[], category: string) => unique.includes(category) ? unique : [...unique, category], [])
        .sort((a: string, b: string) => {
            const textA = a.toUpperCase();
            const textB = b.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

export const getFilteredMovies = (state: { movieReducer: { movies: Movie[] }; filterReducer: { categories: string[]} }) => {
    const { movieReducer: { movies }, filterReducer } = state;

    return movies.filter((movie: Movie) => {
        if (filterReducer.categories.length > 0) {
            return filterReducer.categories.includes(movie.category)
        }
    }).sort((a: { category: string }, b: { category: string }) => {
        const textA = a.category.toUpperCase();
        const textB = b.category.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
};

// export const getAllFilters = state => state.filters;

// export const getSearchBoxInput = state => state.filters.name;
