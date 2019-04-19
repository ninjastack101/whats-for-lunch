import React from 'react';
import { Route } from 'react-router-dom';
import { BASE_ROUTE, LUNCH_MENU_ROUTE } from '../constants/routes';
import Home from '../containers/Home';
import LunchMenu from '../containers/LunchMenu';
import AnimatedRouter from '../components/AnimatedRouter';

export default (
  <AnimatedRouter>
    <Route path={BASE_ROUTE}  exact component={Home} />
    <Route path={LUNCH_MENU_ROUTE}  exact component={LunchMenu} />
  </AnimatedRouter>
);

