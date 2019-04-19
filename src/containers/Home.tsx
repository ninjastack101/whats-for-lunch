import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => (
  <Wrapper>
    <Button>What's For Lunch</Button> 
  </Wrapper>
);

export default Home;

