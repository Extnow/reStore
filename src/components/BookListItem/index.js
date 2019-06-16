import React from 'react';

const BookListItem = ({ book }) => {
  const { title, id } = book;

  return (
    <>
      <span>{id}</span>
      <span>{title}</span>
    </>
  );
};

export { BookListItem };
