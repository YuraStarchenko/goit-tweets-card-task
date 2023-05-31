import { useState } from 'react';
import { Article } from './CardUsers.styled';
import { Logos } from 'components/CardUsers/Logo/Logo';
import Background from 'components/CardUsers/Background/Background';
import { Avatar } from 'components/CardUsers/Avatar/Avatar';
import { Info } from 'components/CardUsers/Info/info';
import { FollowingBtn } from 'components/CardUsers/FollowingBtn/FollowingBtn';
import { updateUser } from '../../service/api';

export const CardUsers = ({ id, user, avatar, followers, tweets }) => {
  const [following, setFollowing] = useState(
    localStorage.getItem(`following-${id}`) === 'true' || false
  );
  const [currentFollowers, setCurrentFollowers] = useState(followers);
  const credentials = {
    followers: following ? currentFollowers - 1 : currentFollowers + 1,
  };

  const handleClick = async () => {
    setFollowing(!following);
    try {
      const response = await updateUser(id, credentials);
      setCurrentFollowers(response.followers);
      localStorage.setItem(`following-${id}`, !following);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Article>
      <Logos />
      <Background />
      <Avatar avatar={avatar} />
      <Info tweets={tweets} followers={currentFollowers} user={user} />
      <FollowingBtn handleClick={handleClick} following={following} />
    </Article>
  );
};
