import React, { FC } from 'react';
import styled from 'styled-components';

import { FaShoppingBag } from 'react-icons/fa';

const CartIcon = styled.div`
  margin: 0 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
`;

const Counter = styled.div`
  font-size: ${({ theme }) => theme.fontXs};
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.primary};

  position: absolute;
  top: 1rem;
  left: .8rem;

  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.4rem;
  height: 1.4rem
`;

const Cart: FC = () => {
  const count: Number = 0;

  return (
    <CartIcon>
      <FaShoppingBag />
      <Counter>{count}</Counter>
    </CartIcon>
  )
}

export default Cart;
