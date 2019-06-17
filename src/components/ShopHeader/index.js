import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  font-size: 26px;
  border-bottom: 3px solid #eee;
  margin: 20px 0px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const ShopHeader = ({ numItems, total }) => {
  return (
    <Header>
      <Link to="/">ReStore</Link>
      <Link to="/cart">
        <i className="fa fa-shopping-cart" /> {numItems} items (${total})
      </Link>
    </Header>
  );
};
export { ShopHeader };
