import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Logs from './components/Logs';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Auth from './components/Auth';
import { AppContainer, Main } from './styles/global.styles';
import { theme } from './styles/theme';

const Popup = () => {
  const active = useSelector((state) => state.location.active);
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const renderPage = (page) => {
    switch (page) {
      case 'Overview':
        return <Overview />;
      case 'Logs':
        return <Logs />;
      case 'Auth':
        return <Auth />;
      default:
        return <Auth />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navigation auth={auth} />
        <Main>{renderPage(active)}</Main>
      </AppContainer>
    </ThemeProvider>
  );
};

export default Popup;
