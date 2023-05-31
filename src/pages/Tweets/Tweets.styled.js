import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BackLinkHref = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  cursor: pointer;
  color: #373737;
  transition: color 250ms ease-in-out;
  &:hover {
    color: #5736a3;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Info = styled.p`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;
