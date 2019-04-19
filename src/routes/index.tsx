import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BASE_ROUTE, LUNCH_MENU_ROUTE } from '../constants/routes';
import Home from '../containers/Home';
import LunchMenu from '../containers/LunchMenu';
import RootWrapper from '../components/RootWrapper';

export default (
  <BrowserRouter>
    <RootWrapper>
      <Route path={BASE_ROUTE} exact component={Home} />
      <Route path={LUNCH_MENU_ROUTE} exact component={LunchMenu} />
    </RootWrapper>
  </BrowserRouter>
);

