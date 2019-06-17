import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { booksLoaded } from '../../actions';
import { BookListItem } from '../BookListItem';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { compose } from '../../utils';

const BooksListStyled = styled.ul`
  list-style-type: none;
`;

const BookListItemStyled = styled.li`
  margin-bottom: 20px;
`;

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // заносит в стор список книг (books)
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <BooksListStyled>
        {books.map(book => (
          <BookListItemStyled key={book.id}>
            <BookListItem book={book} />
          </BookListItemStyled>
        ))}
      </BooksListStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
