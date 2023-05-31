import { CardUsers } from 'components/CardUsers/CardUsers';
import { TweetBox, TweetItem } from './CardUsersList.styled.js';

export const CardUsersList = ({ filteredUsers }) => {
  return (
    <>
      <TweetBox>
        {filteredUsers &&
          filteredUsers.map(({ id, user, avatar, followers, tweets }) => {
            return (
              <TweetItem key={id}>
                <CardUsers
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
