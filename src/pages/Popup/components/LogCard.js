import React from 'react';

import { LogBox, HeadingContainer } from '../styles/Logs.styles';

const LogCard = ({ time, title }) => {
  return (
    <LogBox>
      <HeadingContainer>
        <h4>{title}</h4>
        <i>
          <small>{time}</small>
        </i>
      </HeadingContainer>
    </LogBox>
  );
};

export default LogCard;
