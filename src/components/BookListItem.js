import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ id, title, image }) => (
  <div>
    <Link to={`/library/${id}`}>
      <image src={`data:image/png;base64,${image}`} alt="Image" />
      <p>{title}</p>
    </Link>
  </div>
);

export default BookListItem;