import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { HomePage, CartPage } from '../pages';
import { withBookstoreService } from '../hoc/withBookstoreService';
import { ShopHeader } from '../ShopHeader';

const Main = styled.main`
  max-width: 90%;
  margin: 0px auto;
`;

const App = () => {
  return (
    <Main role="main">
      <ShopHeader numItems={5} total={250} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Main>
  );
};

export default withBookstoreService()(App);
