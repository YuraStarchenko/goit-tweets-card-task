import { Button } from './FollowingBtn.styled.js';

export const FollowingBtn = ({ handleClick, following }) => {
  const getBgColor = following => {
    return {
      backgroundColor: following ? '#5CD3A8' : '#EBD8FF',
    };
  };

  return (
    <Button
      type="button"
      aria-label="Following button"
      onClick={() => {
        handleClick();
      }}
      style={getBgColor(following)}
    >
      {following ? 'Following' : 'Follow'}
    </Button>
  );
};
