import { HANDLE_LIKE, DELETE_MOVIE, FILTER_MOVIE, REMOVE_FILTER_MOVIE, ADD_FILTER_MOVIE } from '../constants/actionTypes';

export const deleteMovie = (id: string) => {
    return {
        type: DELETE_MOVIE,
        id
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

export const handleLike = (id: string, isLiked: boolean) => {
    return {
        type: HANDLE_LIKE,
        id,
        isLiked
    }
}
