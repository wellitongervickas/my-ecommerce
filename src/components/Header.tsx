import React, { FC } from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import Navbar from 'components/Navbar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Header: FC = () => (
  <Container>
    <Logo alt="Vans off the wall" height={50} width={99} />
    <Navbar />
  </Container>
);

export default Header;
