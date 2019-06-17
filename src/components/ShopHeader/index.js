import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 26px;
  border-bottom: 3px solid #eee;
  margin: 20px 0px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  color: #000;
  text-decoration: none;
`;

const ShopHeader = ({ numItems, total }) => {
  return (
    <Header>
      <Title href="/">ReStore</Title>
      <span>
        <i className="fa fa-shopping-cart" /> {numItems} items (${total})
      </span>
    </Header>
  );
};
export { ShopHeader };
