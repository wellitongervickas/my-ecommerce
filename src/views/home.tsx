import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Jumbotron from 'components/Jumbotron';
import ProductsList from 'components/ProductsList';
import Heading from 'components/Heading';
import productsService from 'api/services/products';

const Content = styled.div`
  margin: 2rem 4rem;

  h2 {
    margin: 4rem 0;
  }
`;

const Home: FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService
      .index()
      .then(({ data }) => setProducts(data))
  }, []);

  return (
    <Layout>
      <Jumbotron />
      <Content>
        <Heading is="h2">
          Os mais populares
        </Heading>
        <ProductsList products={products} />
      </Content>
    </Layout>
  )
};

export default Home;
