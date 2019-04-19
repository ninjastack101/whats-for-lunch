import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import RootWrapper from './RootWrapper';
import { fullSize } from '../styles/layouts';

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0, x: '-100%' },
});

const StyledRouteContainer = styled(RouteContainer)`
  ${fullSize}
`;

interface IProps {
  children: any;
};

const AnimatedRouter = ({ children }: IProps) => (
  <BrowserRouter>
    <RootWrapper>
      <Route
        render={({ location }) => (
          <PoseGroup>
            <StyledRouteContainer key={location.pathname}>
              <Switch location={location}>
                {children}
              </Switch>
            </StyledRouteContainer>
          </PoseGroup>
        )}
      />
    </RootWrapper>
  </BrowserRouter>
);

export default AnimatedRouter;

