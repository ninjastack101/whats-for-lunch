import React, { Component } from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import MenuItems from '../components/MenuItems';
import { fetchLunchDetails } from '../actions/lunchMenuActions';
import { ApplicationRootState, IRecipe } from '../types';

const Wrapper = styled('div')`
  height: 100%;
`;

interface IProps {
  fetchLunchDetails: () => void;
  lunchMenu: IRecipe[];
};

class LunchMenu extends Component<IProps> {
  componentDidMount() {
    this.props.fetchLunchDetails();
  }

  render() {
    return (
      <Wrapper>
        <PageHeader>Today in you lunch...</PageHeader>
        <MenuItems lunchMenu={this.props.lunchMenu} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: ApplicationRootState) => ({
  lunchMenu: state.lunchMenu.lunchMenu,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchLunchDetails,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LunchMenu);

