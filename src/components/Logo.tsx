import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoPNG from 'assets/images/logo.png';

export interface ILogo {
  alt?: string,
  height?: number | string,
  width?: number | string,
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  img {
    filter: grayscale(100);
  }
`;

const Logo: FC<ILogo> = ({
  alt,
  height,
  width,
}) => (
  <Container>
    <Link to="/" title={alt}>
      <img
        src={logoPNG}
        alt={alt}
        height={height}
        width={width}
      />
    </Link>
  </Container>
);

Logo.defaultProps = {
  alt: 'Logo',
  height: 'auto',
  width: 'auto'
}

export default Logo;
