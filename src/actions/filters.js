export const setTitleFilter = (text = '') => ({
  type: 'SET_TITLE_FILTER',
  text
});

export const setAuthorFilter = (text = '') => ({
  type: 'SET_AUTHOR_FILTER',
  text
});

export const setBorrowerFilter = (text = '') => ({
  type: 'SET_BORROWER_FILTER',
  text
});