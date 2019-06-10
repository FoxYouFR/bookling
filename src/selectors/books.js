export const getBorrower = (book, loans) => {
  let borrower = undefined;
  loans.forEach(loan => {
    if(loan.bookID === book.id) {
      borrower = loan.borrower
    }
  });
  return borrower;
};

export const getBookFromID = (id, books) => books.find(book => book.id === id);

export const getBooksInLibrary = (books, loans) => {
  const lentBookID = loans.map(loan => loan.bookID);
  return books.filter(book => !lentBookID.includes(book.id));
}