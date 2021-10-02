import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Logs from './components/Logs';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Auth from './components/Auth';
import PaneRouter from './context/PaneRouter';
import { AppContainer, Main } from './styles/global.styles';
import { theme } from './styles/theme';

const Popup = () => {
  const [pane, setPane] = useState({ active: 'auth' });

  const renderPage = (page) => {
    switch (page) {
      case 'overview':
        return <Overview />;
      case 'logs':
        return <Logs />;
      case 'auth':
        return <Auth />;
      default:
        return <Auth />;
    }
  };

  return (
    <PaneRouter.Provider value={{ pane, setPane }}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Navigation />
          <Main>{renderPage(pane.active)}</Main>
        </AppContainer>
      </ThemeProvider>
    </PaneRouter.Provider>
  );
};

export default Popup;
