import { FilterStateRedux } from '../../types/types';
import { ADD_FILTER_MOVIE, REMOVE_FILTER_MOVIE } from '../constants/actionTypes';

const initState: FilterStateRedux = {
    categories: []
};


const filterReducer = (state = initState, action: { type: string, category: string }) => {
    switch (action.type) {
        case ADD_FILTER_MOVIE:
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        case REMOVE_FILTER_MOVIE:
            return {
                ...state,
                categories: state.categories.filter((category) => category !== action.category)
            }
        default:
            return state;
    }
}

export default filterReducer;