import React, { Component } from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import { fetchLunchDetails } from '../actions/lunchMenuActions';

const Wrapper = styled('div')`
  height: 100%;
`;

interface IProps {
  fetchLunchDetails: () => void;
};

class LunchMenu extends Component<IProps> {
  componentDidMount() {
    this.props.fetchLunchDetails();
  }

  render() {
    return (
      <Wrapper>
        <PageHeader>Today in you lunch...</PageHeader>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchLunchDetails,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(LunchMenu);

