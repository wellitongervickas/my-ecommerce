import React, { FC } from 'react';

import styled from 'styled-components';

import Layout from 'components/Layout';
import Heading from 'components/Heading';
import CartList from 'components/CartList';

const Container = styled.div`
  margin: 2rem;
`;

const Cart: FC = () => {
  return (
    <Layout>
      <Container>
        <Heading is="h2">
          Minha sacola
        </Heading>
        <CartList />
      </Container>
    </Layout>
  )
};

export default Cart;
