import React from 'react';
import { connect } from 'react-redux';

import { booksLoaded } from '../../actions';
import { BookListItem } from '../BookListItem';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { compose } from '../../utils';

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
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
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
