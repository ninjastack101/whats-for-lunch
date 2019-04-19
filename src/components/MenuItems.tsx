import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { IRecipe } from '../types';

const Wrapper = styled('div')`
  margin: 10px;
`;

interface IProps {
  lunchMenu: IRecipe[];
};

const MenuItems = ({ lunchMenu = [] }: IProps) => (
  <Wrapper>
    {lunchMenu.map(menu => (
      <MenuItem key={menu.title} {...menu} />
    ))}
  </Wrapper>
);

export default MenuItems;
