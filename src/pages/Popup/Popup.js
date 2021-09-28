import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Overview from './components/Overview';
import PaneRouter from './context/PaneRouter';

const Popup = () => {
  const [pane, setPane] = useState({ currentPane: 'overview', active: true });

  return (
    <PaneRouter.Provider
      value={{
        pane,
        setPane,
      }}
    >
      <div>
        <Navigation />
        <Overview />
      </div>
    </PaneRouter.Provider>
  );
};

export default Popup;
