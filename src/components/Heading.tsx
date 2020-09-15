import React, { FC } from 'react';
import styled from 'styled-components';

export interface IHeading {
  children: string,
  normalize?: boolean,
  is: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const Component = styled.div<{normalize?: boolean}>`
  margin-bottom: 0.4rem;

  position: relative;
  text-transform: ${(props) => !props.normalize ? 'uppercase' : ''};
  font-weight: ${({ theme }) => theme.bold};

  ${(props) => !props.normalize && `
    margin-bottom: 1.6rem;

    &:after {
      content: '';
      width: 1rem;
      height: 3px;
      background-color: ${props.theme.primary};
      position absolute;
      bottom: -0.8rem;
      left: 0;
    }
  `}
`

const Heading: FC<IHeading> = ({
  children,
  is,
  normalize,
}) => (
  <Component as={is} normalize={normalize}>
    {children}
  </Component>
);

export default Heading;
