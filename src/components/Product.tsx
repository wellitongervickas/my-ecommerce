import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Heading from 'components/Heading';
import money from 'helpers/patterns/money';
import Button from './Button';

export interface IProductPrice {
  old_value: number
  new_value: number
  installments: number
  installment_value: number
}

export interface IProduct {
  id: number
  slug: string
  image_path: string
  name: string
  description?: string
  colors: Array<string>
  sizes: Array<string>
  main_category?: string
  price: IProductPrice
}

const ProductDetails = styled.div`
  padding-top: 1rem;
  text-align: center;

  h3 {
    text-transform: uppercase;
  }
`;

const ProductPrices = styled.div`
  padding-top: 1rem;

  strong {
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontLg};
  }
`;

const Product: FC<{product: IProduct}> = ({ product }) => {
  const handleAddCart = () => {
    console.log('add', product)
    window.scrollTo(0,0)
  }

  return (
    <div>
      <Link to={`/${product.main_category}/${product.id}/${product.slug}`}>
        <div>
          <img src={product.image_path} alt={product.name} />
        </div>
        <ProductDetails>
          <Heading is="h3" normalize>{product.name}</Heading>
          <ProductPrices>
            <div>de {money(product.price.old_value)} por</div>
            <div>
              <strong>{money(product.price.new_value)}</strong>
            </div>
            {product.price.installments > 1 && (
              <div>
                <small>
                  {product.price.installments}x de
                  {money(product.price.installment_value)} sem juros
                </small>
              </div>
            )}
          </ProductPrices>
        </ProductDetails>
      </Link>
      <Button onClick={handleAddCart} />
    </div>
  )
};

export default Product;
