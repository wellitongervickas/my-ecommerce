import React, { FC } from 'react';
import styled from 'styled-components';

import bannerImage from 'assets/images/jumbotron/banner-1.jpg'

const Container = styled.div`
  background-color: ${({ theme }) => theme.dark};
  min-height: 450px;

  @media screen and (max-width: ${({ theme }) => theme.breakpointTablet}) {
    display: none;
  }
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Jumbotron: FC = () => (
  <Container>
    <BannerContent>
      <img src={bannerImage} alt="simpsons collections"/>
    </BannerContent>
  </Container>
);

export default Jumbotron;
