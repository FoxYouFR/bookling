import uuid from 'uuid';
import moment from 'moment';

export const addBook = ({title = '', author = '', description = '', image = '', boughtOn = moment(now).valueOf(), condition = 'excellent', price = 0} = {}) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    title,
    author,
    description,
    image,
    boughtOn,
    condition,
    price
  }
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id
});

export const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates
});