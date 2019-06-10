import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import Select from 'react-select';
import { getBookFromID, getBooksInLibrary } from '../selectors/books';

export class LoanForm extends React.Component {
  constructor(props) {
    super(props);
    const options = props.books.map(book => ({ value: book.id, label: book.title }));
    this.state = {
      selectedOption: props.loan ? {
        label: getBookFromID(props.loan.bookID, props.books).title,
        value:  props.loan.bookID
      } : null,
      borrower: props.loan ? props.loan.borrower : '',
      lentAt: props.loan ? moment(props.loan.lentAt) : moment(),
      options,
      calendarFocused: false,
      error: ''
    };
  };
  onTitleChange = selectedOption => {
    this.setState(() => ({ selectedOption }));
  };
  onBorrowerChange = e => {
    const borrower = e.target.value;
    this.setState(() => ({ borrower }));
  };
  onDateChange = lentAt => {
    if(lentAt) {
      this.setState(() => ({ lentAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if(!this.state.selectedOption || !this.state.borrower || !this.state.lentAt) {
      this.setState(() => ({ error: 'Please provide all the information' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        bookID: this.state.selectedOption.value,
        borrower: this.state.borrower,
        lentAt: this.state.lentAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div className="ml-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <Select value={this.state.selectedOption} onChange={this.onTitleChange} options={this.state.options}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Borrower" value={this.state.borrower} onChange={this.onBorrowerChange} className="form-control"/>
          </div>
          <div className="form-group">
            <SingleDatePicker date={this.state.lentAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange}
                              numberOfMonths={1} isOutsideRange={day => false}/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">OK!</button>
        </form>
        { this.state.error && <p>{this.state.error}</p> }
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  const books = getBooksInLibrary(state.books, state.loans);
  return {
    books: props.loan ? [...books, getBookFromID(props.loan.bookID, state.books)] : books
  };
};

export default connect(mapStateToProps)(LoanForm)