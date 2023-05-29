import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: block;
  padding: 14px 28px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  background-color: #5736a3;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out;
  :hover {
    box-shadow: rgb(255 0 134 / 50%) 0px 8px 43px;
  }
`;
