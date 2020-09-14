import React, { FC } from 'react';
import styled from 'styled-components';

import wallpaperImage from 'assets/images/jumbotron/wall-1.png'
import bannerImage from 'assets/images/jumbotron/banner-1.jpg'


const Container = styled.div`
  background-color: ${({ theme }) => theme.dark};
  height: 450px;
  position: relative;
  overflow: hidden;
`;

const Background = styled.img`
  filter: grayscale(1);
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;
`

const BannerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    justify-content: flex-end;
  }
`;

const Jumbotron: FC = () => (
  <Container>
    <BannerContent>
      <img src={bannerImage} alt="simpsons collections" />
    </BannerContent>
    <Background src={wallpaperImage} alt="simpsons collections background" />
  </Container>
);

export default Jumbotron;
