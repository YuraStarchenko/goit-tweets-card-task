import TweetCard from 'components/TweetCard';
import { TweetBox, TweetItem } from './TweetList.styled';

export const CardUsersList = ({ filteredUsers }) => {
  return (
    <>
      <TweetBox>
        {filteredUsers &&
          filteredUsers.map(({ id, user, avatar, followers, tweets }) => {
            return (
              <TweetItem key={id}>
                <TweetCard
                  id={id}
                  user={user}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                />
              </TweetItem>
            );
          })}
      </TweetBox>
    </>
  );
};