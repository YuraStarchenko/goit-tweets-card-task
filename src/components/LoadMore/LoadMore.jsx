import { LoadMoreButton } from './LoadMore.styled';

export const LoadMore = ({ handleClick }) => {
  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load More
    </LoadMoreButton>
  );
};
