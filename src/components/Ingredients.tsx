import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
`;

const Ingredient = styled('div')`
  padding: 11px 16px;
`;

interface IProps {
  ingredients: string[];
};

const Ingredients = ({ ingredients = [] }: IProps) => (
  <Wrapper>
    {ingredients.map(ingredient => (
      <Ingredient key={ingredient}>{ingredient}</Ingredient>
    ))}
  </Wrapper>
);

export default Ingredients;
