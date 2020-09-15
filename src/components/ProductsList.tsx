import React, { FC } from 'react';
import styled from 'styled-components';

import Product from 'components/Product';

const Container = styled.div`
  display: grid;
  grid-gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakPointMobile}) and (max-width: ${({ theme }) => theme.breakpointTablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpointTablet}) and (max-width: ${({ theme }) => theme.breakpointDesktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductsList: FC = () => (
  <Container>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </Container>
);

export default ProductsList;
