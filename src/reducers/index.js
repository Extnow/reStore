import { updateBookList } from './updateBookList';
import { updateShoppingCart } from './updateShoppingCart';

const reducer = (state, action) => {
  return {
    booksList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export { reducer };
