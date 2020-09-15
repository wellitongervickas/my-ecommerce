import React, { FC, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FaTimes, FaBars } from 'react-icons/fa';

import Cart from 'components/Cart';

import debounceEvent from 'helpers/events/debounce';
import { breakpointDesktop } from 'assets/javascript/theme';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;

    li {
      a {
        font-size: ${({ theme }) => theme.fontMd};
        color: ${({ theme }) => theme.dark};
        padding: 0 1rem;
      }
    }
  }
`;

const NavIcon = styled.div`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontLg};

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    display: none;
  }
`;

const NavList = styled.div<{opened: boolean}>`
  @media screen and (max-width: ${({ theme }) => theme.breakpointDesktop}) {
    transition: all 0.1s ease-in;
    position: fixed;
    opacity: ${props => props.opened ? '0.9' : '0'};
    visibility: ${props => props.opened ? 'visible' : 'hidden'};
    left: ${props => props.opened ? '0' : '-100%'};
    width: 70%;
    height: 100%;
    top: 0;
    z-index: 4;
    background-color: ${({ theme }) => theme.dark};

    ul {
      flex-direction: column;
      padding: 2rem;
      line-height: 3rem;

      li > a {
        display: block;
        color: ${({ theme }) => theme.light};
      }
    }
  }
`;

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen]);

  const handleResizeWindow = debounceEvent(useCallback(() => {
    if (!isOpen) {
      setIsOpen(Number(window.innerWidth) > breakpointDesktop);
    }
  }, [setIsOpen, isOpen]), 100);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)
    return () => window.removeEventListener('resize', handleResizeWindow)
  })

  return (
    <Container>
      <NavIcon onClick={handleSetIsOpen}>
        {isOpen ? <FaTimes /> : <FaBars  /> }
      </NavIcon>
      <NavList opened={isOpen}>
        <ul>
          <li>
            <Link to="/" title="News">
              News
            </Link>
          </li>
          <li>
            <Link to="/" title="Mens">
              Mens
            </Link>
          </li>
          <li>
            <Link to="/" title="Woman">
              Woman
            </Link>
          </li>
          <li>
            <Link to="/" title="Kids">
              Kids
            </Link>
          </li>
          <li>
            <Link to="/" title="Skate">
              Skate
            </Link>
          </li>
          <li>
            <Link to="/" title="Surf">
              Surf
            </Link>
          </li>
        </ul>
      </NavList>
      <Cart />
    </Container>
  )
};

export default Navbar;
