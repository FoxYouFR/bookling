import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { addBook } from '../actions/books';

export class AddBookPage extends React.Component {
  onSubmit = book => {
    this.props.addBook(book);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add a book</h1>
        <BookForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book))
});

export default connect(undefined, mapDispatchToProps)(AddBookPage);