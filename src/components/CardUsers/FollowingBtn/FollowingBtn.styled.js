import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 196px;
  margin: 0 auto;
  padding: 14px 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out transform 250ms ease-in-out;
  :hover {
    transform: translateY(-4px);
    box-shadow: rgb(255 0 134 / 50%) 0px 8px 43px;
  }
`;
