import React from 'react';

import {
  Container,
  Greet,
  TopContainer,
  Button,
  AlertText,
} from '../styles/Overview.styles';

const Overview = ({ error }) => {
  return (
    <Container>
      <TopContainer>
        <Greet>Good Morning Tulsi 👋</Greet>
        <Button>Add highlights</Button>
        {error && (
          <AlertText>
            File format not supported. Try adding HTML/CSV format.
          </AlertText>
        )}
      </TopContainer>
    </Container>
  );
};

export default Overview;
