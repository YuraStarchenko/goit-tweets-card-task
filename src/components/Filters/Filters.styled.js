import styled from 'styled-components';
import { BsArrowDown } from 'react-icons/bs';

export const Icon = styled(BsArrowDown)`
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  cursor: pointer;
  position: relative;
  transition: color 250ms ease-in-out 0s;
  :hover {
    color: #5736a3;
  }
`;

export const Select = styled.select`
  width: 148px;
  padding: 8px;
  color: #373737;
  border: none;
  appearance: none;
  padding-right: 20px;
  background-color: transparent;
  transition: color 250ms ease-in-out;
  :hover {
    color: #5736a3;
  }
  :focus {
    border: none;
    outline: none;
  }
`;
