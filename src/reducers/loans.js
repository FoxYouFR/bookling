export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_LOAN':
      return [...state, action.loan];
    case 'REMOVE_LOAN':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOAN':
      return state.map(loan => {
        if(loan.id === action.id) {
          return {
            ...loan,
            ...action.updates
          };
        } else return loan;
      })
    default:
      return state;
  }
};