import React from 'react';

import LogCard from './LogCard';

const Logs = () => {
  return (
    <div>
      <LogCard time={6} title="The Richest Man in Babylon" />
      <LogCard time={13} title="Think and Grow Rich" />
      <LogCard time={17} title="12 Rules for Successful Life" />
    </div>
  );
};

export default Logs;
