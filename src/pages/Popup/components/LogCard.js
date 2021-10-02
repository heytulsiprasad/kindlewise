import React from 'react';

import { LogBox, HeadingContainer } from '../styles/Logs.styles';

const LogCard = ({ time, title }) => {
  return (
    <LogBox>
      <HeadingContainer>
        <h5>
          {title}, {time} minutes ago
        </h5>
      </HeadingContainer>
    </LogBox>
  );
};

export default LogCard;
