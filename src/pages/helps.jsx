export const getfilterUser = (users, filter) => {
  const filters = {
    follow: user => !isUserFollowing(user),
    following: user => isUserFollowing(user),
    default: () => true,
  };

  const filterFunction = filters[filter] || filters.default;
  return users.filter(filterFunction);
};

const isUserFollowing = user => {
  const isFollowing = localStorage.getItem(`following-${user.id}`) === 'true';
  return isFollowing;
};

export const formattingNumber = number =>
  number.toLocaleString('en-US', { useGrouping: true });
