import React, { FC } from 'react';
import styled from 'styled-components';

import Heading from 'components/Heading';

import productImage from 'assets/images/products/1.jpg';


const ProductImage = styled.div`
  padding-top: 1rem;
`;


const ProductDetails = styled.div`
  padding-top: 1rem;
`;

const ProductPrices = styled.div`
  padding-top: 1rem;

  strong {
    font-size: ${({ theme }) => theme.fontLg};
  }
`;

const Product: FC = () => (
  <div>
    <div>
      <img src={productImage} alt="product name" />
    </div>
    <ProductDetails>
      <Heading is="h3" normalize>Camiseta Print Box</Heading>
      <ProductPrices>
        <div>de R$322,00 por</div>
        <div>
          <strong>R$190,00</strong>
        </div>
        <div>
          <small>10x de 19,00 sem juros</small>
        </div>
      </ProductPrices>
    </ProductDetails>
  </div>
);

export default Product;
