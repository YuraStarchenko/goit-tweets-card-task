import { formattingNumber } from '../../../pages/helps';
import { Wrapper, Text } from './info.styled.js';

export const Info = ({ user, followers, tweets }) => {
  return (
    <Wrapper>
      <Text as="h2">{user}</Text>
      <Text>{formattingNumber(tweets)} tweets</Text>
      <Text>{formattingNumber(followers)} Followers</Text>
    </Wrapper>
  );
};
