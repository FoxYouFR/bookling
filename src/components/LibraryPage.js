import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';

export const LibraryPage = props => (
  <div>
    {
      props.books.length === 0 ? (
        <p>No book in your library</p>
      ) : (
        props.books.map(book => {
          return <BookListItem {...book} key={book.id} />
        })
      )
    }
    <NavLink to="/library/create">Create a book</NavLink>
  </div>
);

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(LibraryPage);