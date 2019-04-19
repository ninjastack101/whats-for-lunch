import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Link from '../components/Link';
import { LUNCH_MENU_ROUTE } from '../constants/routes';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => (
  <Wrapper>
    <Link to={LUNCH_MENU_ROUTE}>
      <Button>What's For Lunch</Button> 
    </Link>
  </Wrapper>
);

export default Home;

