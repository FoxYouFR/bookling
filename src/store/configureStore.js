import { createStore, combineReducers } from 'redux';
import loansReducer from '../reducers/loans';
import booksReducer from '../reducers/books';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      loans: loansReducer,
      books: booksReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};