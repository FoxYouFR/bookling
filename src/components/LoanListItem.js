import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getBookFromID } from '../selectors/books';

export const LoanListItem = ({ bookID, borrower, lentAt, books }) => {
  const book = getBookFromID(bookID, books);
  return (
    <div>
      <p>"{book.title}", by {book.author}</p>
      <p>Lent to {borrower} on the {moment(lentAt).format('Do MMMM YYYY')}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(LoanListItem);