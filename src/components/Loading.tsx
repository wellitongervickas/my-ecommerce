import React, { FC } from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  margin: 0 auto;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading: FC = () => (
  <Spinner />
);

export default Loading;
