import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: -10px;
  margin-left: -40px;
  border-radius: 50%;
  background: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3.43693px 3.43693px,
    rgb(174, 123, 227) 0px -1.71846px 3.43693px inset,
    rgb(251, 248, 255) 0px 3.43693px 2.5777px inset;
`;

export const Img = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 50%;
  background: #5736a3;
`;

export const Line = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
