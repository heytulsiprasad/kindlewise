import React from 'react';

import LogCard from './LogCard';
import { LogsContainer } from '../styles/Logs.styles';

const Logs = () => {
  return (
    <LogsContainer>
      <LogCard time={6} title="The Richest Man in Babylon" />
      <LogCard time={13} title="Think and Grow Rich" />
      <LogCard time={17} title="12 Rules for Successful Life" />
    </LogsContainer>
  );
};

export default Logs;
