import React, { FC } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Jumbotron from 'components/Jumbotron';
import ProductsList from 'components/ProductsList';
import Heading from 'components/Heading';

const Content = styled.div`
  margin: 2rem 4rem;
`;

const Home: FC = () => (
  <Layout>
    <Jumbotron />
    <Content>
      <Heading is="h2">
        Os mais populares
      </Heading>
      <ProductsList />
    </Content>
  </Layout>
);

export default Home;
