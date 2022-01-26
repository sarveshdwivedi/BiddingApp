import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Products from './components/products/products';
import { getCurrentUser } from './actions/userauth.actions';

import requireAuth from './lib/requireAuth';
import store from './store';

export default (
  <Route path="/" component={Layout} onEnter={store.dispatch(getCurrentUser())}>
    <IndexRoute component={requireAuth(Products)} />
    <Route path="/product" component={Products} />
  </Route>
);