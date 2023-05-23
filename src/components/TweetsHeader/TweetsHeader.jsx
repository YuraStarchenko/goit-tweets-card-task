import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Text,
  TextLink,
} from './TweetsHeader.styled.js';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const TweetsHeader = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Text>Tweets</Text>
          <AiFillTwitterCircle />
        </Logo>
        <nav>
          <Link to="/" end>
            <TextLink>Home</TextLink>
          </Link>
          <Link to="/tweets">
            <TextLink>Tweets</TextLink>
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
