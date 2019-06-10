import React from 'react';
import { connect } from 'react-redux';
import LoanForm from './LoanForm';
import { editLoan, removeLoan } from '../actions/loans';

export class EditLoanPage extends React.Component {
  onSubmit = loan => {
    this.props.editLoan(this.props.loan.id, loan);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeLoan(this.props.loan.id);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Edit loan</h1>
        <LoanForm onSubmit={this.onSubmit} loan={this.props.loan}/>
        <button onClick={this.onRemove}>Remove the loan</button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  loan: state.loans.find(loan => loan.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editLoan: (id, loan) => dispatch(editLoan(id, loan)),
  removeLoan: id => dispatch(removeLoan(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLoanPage);