import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Logs from './components/Logs';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import PaneRouter from './context/PaneRouter';

import { AppContainer } from './styles/global.styles';
import { theme } from './styles/theme';

const Popup = () => {
  const [pane, setPane] = useState({ active: 'overview' });

  return (
    <PaneRouter.Provider
      value={{
        pane,
        setPane,
      }}
    >
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Navigation />
          {pane.active === 'overview' ? <Overview /> : <Logs />}
        </AppContainer>
      </ThemeProvider>
    </PaneRouter.Provider>
  );
};

export default Popup;
