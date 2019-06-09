import uuid from 'uuid';
import moment from 'moment';

export const addLoan = ({ bookID, borrower, lentAt = 0 }) => ({
  type: 'ADD_LOAN',
  loan: {
    id: uuid(),
    bookID,
    borrower,
    lentAt
  }
});

export const removeLoan = id => ({
  type: 'REMOVE_LOAN',
  id
});

export const editLoan = (id, updates) => ({
  type: 'EDIT_LOAN',
  id,
  updates
});