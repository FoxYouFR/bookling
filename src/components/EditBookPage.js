import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { editBook, removeBook } from '../actions/books';

export class EditBookPage extends React.Component {
  onSubmit = book => {
    this.props.editBook(this.props.book.id, book);
    this.props.history.push('/library');
  };
  onRemove = () => {
    this.props.removeBook(this.props.book.id);
    this.props.history.push('/library');
  };
  render() {
    return (
      <div>
        <h1>Edit book</h1>
        <BookForm onSubmit={this.onSubmit} book={this.props.book}/>
        <button onClick={this.onRemove}>Remove the book</button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  book: state.books.find(book => book.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editBook: (id, book) => dispatch(editBook(id, book)),
  removeBook: id => dispatch(removeBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage);