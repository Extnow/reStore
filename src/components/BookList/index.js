import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { booksLoaded, booksRequested, booksError } from '../../actions';
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

class BookList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

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
    books: state.books,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then(data => {
          dispatch(booksLoaded(data));
        })
        .catch(err => dispatch(booksError(err)));
    }
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
