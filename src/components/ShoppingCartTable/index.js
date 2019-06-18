import React from 'react';
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <>
      <h2>Ваш заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            const { id, title, count, total } = item;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>₽{total}</td>
                <td>
                  <button onClick={() => onIncrease(id)} className="btn btn-outline-warning mr-2">
                    <i className="fa fa-minus-circle" />
                  </button>
                  <button onClick={() => onDecrease(id)} className="btn btn-outline-success mr-2">
                    <i className="fa fa-plus-circle" />
                  </button>
                  <button onClick={() => onDelete(id)} className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total">Total: ₽{total}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    items: state.cartItems,
    total: state.orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: id => {
      console.log(`inc ${id}`);
    },
    onDecrease: id => {
      console.log(`dec ${id}`);
    },
    onDelete: id => {
      console.log(`del ${id}`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
