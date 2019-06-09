import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import Select from 'react-select';
import { getBookFromID } from '../selectors/books';

export class LoanForm extends React.Component {
  constructor(props) {
    super(props);
    const options = this.props.books.map(book => ({ value: book.id, label: book.title }));
    this.state = {
      selectedOption: this.props.loan ? {
        label: getBookFromID(this.props.loan.bookID, this.props.books).id,
        value:  this.props.loan.bookID
      } : null,
      borrower: this.props.loan ? this.props.loan.borrower : '',
      lentAt: this.props.loan ? moment(this.props.loan.lentAt) : moment(),
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
      <div>
        <form onSubmit={this.onSubmit}>
          <Select value={this.state.selectedOption} onChange={this.onTitleChange} options={this.state.options}/>
          <input type="text" placeholder="Borrower" value={this.state.borrower} onChange={this.onBorrowerChange}/>
          <SingleDatePicker date={this.state.lentAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange}
                            numberOfMonths={1} isOutsideRange={day => false}/>
          <button type="submit">OK!</button>
        </form>
        { this.state.error && <p>{this.state.error}</p> }
      </div>
    );
  };
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(LoanForm)