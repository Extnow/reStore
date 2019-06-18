const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 500
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(book => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export { reducer };
