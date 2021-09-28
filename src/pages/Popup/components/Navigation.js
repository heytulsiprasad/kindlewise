import React from 'react';

const Navigation = () => {
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
          <button>Overview</button>
        </div>
        <div>
          <button>Logs</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
