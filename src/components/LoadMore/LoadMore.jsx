import { LoadMoreButton } from './LoadMore.styled';

const LoadMore = ({ handleClick }) => {
  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load More
    </LoadMoreButton>
  );
};

export default LoadMore;
