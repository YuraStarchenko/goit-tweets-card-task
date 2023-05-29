import { Thumb, Img, Line } from './Avatar.styled';

export const Avatar = ({ avatar }) => {
  return (
    <>
      <Line />
      <Thumb>
        <Img src={avatar} alt="User avatar" />
      </Thumb>
    </>
  );
};
