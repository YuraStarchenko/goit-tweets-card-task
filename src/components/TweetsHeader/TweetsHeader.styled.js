import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  background-color: #471ca9;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  display: flex;
  color: #ebd8ff;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 5px;
  font-size: 40px;
  margin: 0;
`;

export const Text = styled.h1`
  font-family: 'Righteous';
  font-size: 30px;
`;

export const TextLink = styled.p`
  font-family: 'Righteous';
  font-size: 18px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  opacity: 2;
  font-weight: 500;
  color: #ebd8ff;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.9;
  }

  &.active {
    color: #000;
    background-color: #5cd3a8;
  }
`;
