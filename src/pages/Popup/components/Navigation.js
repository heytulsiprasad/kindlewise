import React, { useContext } from 'react';

import PaneRouter from '../context/PaneRouter';

const Navigation = () => {
  const { pane, setPane } = useContext(PaneRouter);

  const setCurrentPane = (tab) => {
    setPane({ currentPane: tab, active: true });
  };

  return (
    <nav style={{ border: '1px solid black' }}>
      <div className="top-container">
        <h1>Kindlewise</h1>
        <div>
          <p>Image goes here</p>
        </div>
      </div>
      <div className="bottom-container">
        <div>
          <button
            style={{ color: pane.currentPane === 'overview' && 'red' }}
            onClick={() => setCurrentPane('overview')}
          >
            Overview
          </button>
        </div>
        <div>
          <button
            style={{ color: pane.currentPane === 'logs' && 'red' }}
            onClick={() => setCurrentPane('logs')}
          >
            Logs
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
