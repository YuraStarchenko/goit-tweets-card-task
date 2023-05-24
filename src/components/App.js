import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { TweetsHeader } from './TweetsHeader/TweetsHeader';
import { Home } from '../pages/Home/Home';
import { Tweets } from '../pages/Tweets/Tweets.jsx';

export const App = () => {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<TweetsHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Home to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
