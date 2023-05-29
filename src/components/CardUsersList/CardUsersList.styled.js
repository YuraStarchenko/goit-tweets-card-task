import styled from 'styled-components';

export const TweetBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 268px);
  justify-content: flex-start;
  gap: 30px;
  margin-bottom: 20px;
  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const TweetItem = styled.li`
  width: 100%;
  @media (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }
  @media (min-width: 1200px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
