import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.book ? props.book.title : '',
      author: props.book ? props.book.author : '',
      description: props.book ? props.book.description : '',
      image: props.book ? props.book.image : '',
      boughtOn: props.book ? moment(props.book.boughtOn) : moment(),
      condition: props.book ? props.book.condition : 'excellent',
      price: props.book ? props.book.price : 0,
      calendarFocused: false,
      error: ''
    };
  }
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onAuthorChange = e => {
    const author = e.target.value;
    this.setState(() => ({ author }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onImageChange = e => {
    // TODO
  };
  onDateChange = boughtOn => {
    if(boughtOn) {
      this.setState(() => ({ boughtOn }));
    }
  };
  onConditionChange = e => {
    const condition = e.target.value;
    this.setState(() => ({ condition }));
  };
  onPriceChange = e => {
    const price = e.target.value;
    if(!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if(!this.state.title) {
      this.setState(() => ({ error: 'Please provide a title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image,
        boughtOn: this.state.boughtOn.valueOf(),
        condition: this.state.condition,
        price: parseFloat(this.state.price, 10)
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Title" autoFocus value={this.state.title} onChange={this.onTitleChange}/>
          <input type="text" placeholder="Author" value={this.state.author} onChange={this.onAuthorChange}/>
          <image src="" alt="Book cover"/>
          <textarea placeholder="Add a description to the book" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
          <SingleDatePicker date={this.state.boughtOn} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange}
                            numberOfMonths={1} isOutsideRange={day => false}/>
          <input type="text" placeholder="Price" value={this.state.price} onChange={this.onPriceChange} />
          <select value={this.state.condition} onChange={this.onConditionChange}>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="terrible">Terrible</option>
          </select>
          <button type="submit">Add book</button>
        </form>
        { this.state.error && <p>{this.state.error}</p> }
      </div>
    );
  };
}