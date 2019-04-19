import React from 'react';
import styled from 'styled-components';
import { textPrimary } from '../styles/text';
import Ingredients from './Ingredients'; 
import Card from './Card'; 

const DishName = styled('div')`
  ${textPrimary}
  
  font-size: 17px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 11px 16px 16px;
`;

interface IProps {
  title: string;
  ingredients: string[];
};

const MenuItem = ({ title, ingredients }: IProps) => (
  <Card>
    <DishName>{title}</DishName>
    <Ingredients ingredients={ingredients} />
  </Card>
);

export default MenuItem;

