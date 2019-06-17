import React from 'react';

const ShoppingCartTable = () => {
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
          <tr>
            <td>1</td>
            <td>Кровь, пот и пиксели</td>
            <td>1</td>
            <td>₽564</td>
            <td>
              <button className="btn btn-outline-danger mr-2">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success mr-2">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: ₽564</div>
    </>
  );
};

export { ShoppingCartTable };
