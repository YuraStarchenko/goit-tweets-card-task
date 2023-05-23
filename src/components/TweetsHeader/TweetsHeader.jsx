import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './TweetsHeader.styled.js';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const TweetsHeader = () => {
  return (
    <Container>
      <Header>
        <Logo>
          Tweets
          <AiFillTwitterCircle />
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};