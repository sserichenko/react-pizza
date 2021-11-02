import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import filtersReducer from './filters';

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer
})

export default rootReducer;