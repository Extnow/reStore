import React from 'react';
import styled from 'styled-components';

const BookListItemStyled = styled.div`
  display: flex;
`;

const BookCover = styled.div`
  margin-right: 30px;
`;

const BookListItem = ({ book }) => {
  const { title, img, author, price } = book;

  return (
    <BookListItemStyled>
      <BookCover>
        <img src={img} alt={title} width="150px" />
      </BookCover>
      <div>
        <h3>{title}</h3>
        <div>Автор: {author}</div>
        <div>Цена: {price}₽</div>
        <br />
        <button>Добавить в корзину</button>
      </div>
    </BookListItemStyled>
  );
};

export { BookListItem };
