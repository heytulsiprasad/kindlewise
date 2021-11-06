import React from 'react';
import { useSelector } from 'react-redux';

import LogCard from './LogCard';
import { LogsContainer } from '../styles/Logs.styles';

const Logs = () => {
  const logs = useSelector((state) => state.logs.listOfLogs);

  return (
    <LogsContainer>
      {logs.map((item, idx) => (
        <LogCard title={item.title} time={item.time} />
      ))}
    </LogsContainer>
  );
};

export default Logs;
