import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { TweetsHeader } from './TweetsHeader/TweetsHeader';



export const App = () => {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<TweetsHeader />}></Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
