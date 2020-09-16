import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Loading from 'components/Loading';
import Jumbotron from 'components/Jumbotron';
import ProductsList from 'components/ProductsList';
import Heading from 'components/Heading';

import productsService from 'api/services/products';

const Content = styled.div`
  margin: 2rem;

  h2 {
    margin: 2rem 0;
  }
`;

const Home: FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    productsService
      .index()
      .then(({ data }) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <Jumbotron />
      <Content>
        <Heading is="h2">
          Os mais populares
        </Heading>
        {loading && <Loading />}
        <ProductsList products={products} />
      </Content>
    </Layout>
  )
};

export default Home;
