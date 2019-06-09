const filtersReducerDefaultState = {
  title: '',
  author: '',
  borrower: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TITLE_FILTER':
      return {
        ...state,
        title: action.text
      };
    case 'SET_AUTHOR_FILTER':
      return {
        ...state,
        author: action.text
      };
    case 'SET_BORROWER_FILTER':
      return {
        ...state,
        borrower: action.text
      };
    default:
      return state;
  }
};