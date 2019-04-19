import React, { Component } from 'react';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';

const Wrapper = styled('div')`
  height: 100%;
`;

class LunchMenu extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Wrapper>
        <PageHeader>Today in you lunch...</PageHeader>
      </Wrapper>
    );
  }
}

export default LunchMenu;

