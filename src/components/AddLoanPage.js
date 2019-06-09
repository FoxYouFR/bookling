import React from 'react';
import { connect } from 'react-redux';
import LoanForm from './LoanForm';
import { addLoan } from '../actions/loans';

export class AddLoanPage extends React.Component {

  onSubmit = loan => {
    this.props.addLoan(loan);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add a loan</h1>
        <LoanForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLoan: loan => dispatch(addLoan(loan))
});

export default connect(undefined, mapDispatchToProps)(AddLoanPage);