import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

import { withBookstoreService } from '../hoc/withBookstoreService';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default withBookstoreService()(App);
