import { GlobalStyle } from '../GlobalStyle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { useAuth } from '../hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();


  return (
    <div>
      return isRefreshing ? (<b>Refreshing user...</b>) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
      );
    </div>
  );
};