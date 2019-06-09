export const getBorrower = (book, loans) => {
  let borrower = undefined;
  loans.forEach(loan => {
    if(loan.bookID === book.id) {
      borrower = loan.borrower
    }
  });
  return borrower;
};