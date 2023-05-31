import { Thumb, Img } from './Background.styled';
import picture1 from '../../../img/picture1.png';

const Background = () => {
  return (
    <Thumb>
      <Img src={picture1} alt="Background" />
    </Thumb>
  );
};

export default Background;
