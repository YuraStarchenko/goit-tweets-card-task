import { Thumb, Img } from './Background.styled';
import bg from 'images/bg.png';

const Background = () => {
  return (
    <Thumb>
      <Img src={bg} alt="Background" />
    </Thumb>
  );
};

export default Background;
