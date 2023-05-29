import { formattingNumber } from 'helpers';
import { Wrapper, Text } from './Info.styled';

const Info = ({ user, followers, tweets }) => {
  return (
    <Wrapper>
      <Text as="h2">{user}</Text>
      <Text>{formattingNumber(tweets)} tweets</Text>
      <Text>{formattingNumber(followers)} Followers</Text>
    </Wrapper>
  );
};

export default Info;
