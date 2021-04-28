import { HANDLE_LIKE, SET_TEXT_FILTER, DELETE_MOVIE, FILTER_MOVIE, REMOVE_FILTER_MOVIE, ADD_FILTER_MOVIE } from '../constants/actionTypes';

export const deleteMovie = (id: string) => {
    return {
        type: DELETE_MOVIE,
        id
    }
}

export const setTextFilter = (name: string) => {
    return {
        type: SET_TEXT_FILTER,
        name
    }
}

export const filterMovie = (category: string) => {
    return {
        type: FILTER_MOVIE,
        category
    }
}

export const removeFilterMovie = (category: string) => {
    return {
        type: REMOVE_FILTER_MOVIE,
        category
    }
}

export const addFilterMovie = (category: string) => {
    return {
        type: ADD_FILTER_MOVIE,
        category
    }
}

export const handleLike = (likes: string) => {
    return {
        type: HANDLE_LIKE,
        likes
    }
}
