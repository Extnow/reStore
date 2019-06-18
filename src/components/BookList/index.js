import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { BookListItem } from '../BookListItem';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { compose } from '../../utils';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';

const BooksListStyled = styled.ul`
  list-style-type: none;
`;

const BookListItemStyled = styled.li`
  margin-bottom: 20px;
`;

const BookList = ({ books, onAddedToCart }) => {
  return (
    <BooksListStyled>
      {books.map(book => (
        <BookListItemStyled key={book.id}>
          <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
        </BookListItemStyled>
      ))}
    </BooksListStyled>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = state => {
  return {
    books: state.booksList.books,
    loading: state.booksList.loading,
    error: state.booksList.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
