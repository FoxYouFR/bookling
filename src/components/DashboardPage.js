import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoanListItem from './LoanListItem';

export const DashboardPage = props => (
  <div>
    {
      props.loans.length === 0 ? (
        <p>No book borrowed for the moment</p>
      ) : (
        props.loans.map(loan => {
          return <LoanListItem {...loan} key={loan.id} />
        })
      )
    }
    <NavLink to="/create">Create a loan</NavLink>
  </div>
);

const mapStateToProps = state => ({
  loans: state.loans
});

export default connect(mapStateToProps)(DashboardPage);