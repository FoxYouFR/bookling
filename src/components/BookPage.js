import React from 'react';
import numeral from '../locales/ch';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBorrower } from '../selectors/books';

export class BookPage extends React.Component {
  render() {
    return (
      this.props.book ? (
        <div>
          <h1>{this.props.book.title}</h1>
          <h2>{this.props.book.author}</h2>
          <image src={`data:image/png;base64,${this.props.image}`} alt="Book cover" />
          <p>{this.props.book.description}</p>
          <p>Is in {this.props.book.condition} condition.</p>
          <p>Cost you {numeral(this.props.book.price).format('$0.00')}</p>
          <p>{this.props.borrower ? `Lent to ${this.props.borrower}.` : `In your library.`}</p>
          <h4>Past loans</h4>
          <p>Not implemented yet</p>
          <NavLink to={`/library/edit/${this.props.book.id}`}>Edit the book</NavLink>
        </div>
      ) : (
        <div>
          <h1>The book was not found</h1>
          <NavLink to="/library">Go back to your library</NavLink>
        </div>
      )
    );
  }
}

const mapStateToProps = (state, props) => {
  let book = state.books.find(book => book.id === props.match.params.id);
  return {
    book,
    borrower: getBorrower(book, state.loans)
  };
};

export default connect(mapStateToProps)(BookPage);