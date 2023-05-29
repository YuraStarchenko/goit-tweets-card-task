import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CardUsersList } from 'components/CardUsersList/CardUsersList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import ScrollToTopBtn from 'components/ScrollToTopBtn';
import LoadMore from 'components/LoadMore';
import Loader from 'components/Loader';
import { BsArrowLeft } from 'react-icons/bs';
import { getUsers } from 'api';
import { getfilteredUsers } from 'helpers';
import { Section, BackLinkHref, Wrapper, Info } from './Tweets.styled';

export const Tweets = () => {
  const initialState = {
    users: [],
    page: 1,
    hasMoreUsers: true,
    filter: 'show all',
    isLoading: false,
  };
  const { users, page, hasMoreUsers, filter, isLoading } =
    useState(initialState);

  const LIMIT_PAGE = 3;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const filteredUsers = getfilteredUsers(users, filter);

  useEffect(() => {
    async function getUsersTweets() {
      try {
        isLoading(true);
        const data = await getUsers({ page, limit: LIMIT_PAGE });
        hasMoreUsers(data.length === LIMIT_PAGE);
        getUsers(prevUsers => [...prevUsers, ...data]);
        isLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getUsersTweets();
  }, [page]);

  const handleClick = () => {
    page.setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = e => {
    filter(e.target.value);
  };

  const isUsersListEmpty = users.length === 0;

  return (
    <main>
      <Section>
        <Container>
          <Wrapper>
            <BackLinkHref to={backLinkHref}>
              <BsArrowLeft />
              Go back
            </BackLinkHref>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
          </Wrapper>
          {!isUsersListEmpty && (
            <>
              <CardUsersList filteredUsers={filteredUsers} />
              {hasMoreUsers ? (
                <LoadMore handleClick={handleClick} />
              ) : (
                <Info>
                  You have reached the end of the users list &#128203;
                </Info>
              )}
            </>
          )}
          <ScrollToTopBtn />
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};
