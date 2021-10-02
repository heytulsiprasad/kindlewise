import React from 'react';

import { Container, Greet, TopContainer } from '../styles/Auth.styles';
import { Button } from '../styles/global.styles';

const Auth = () => {
  return (
    <Container>
      <TopContainer>
        <Greet>Welcome to Kindlewise</Greet>
        <Button>Login with Notion</Button>
      </TopContainer>
    </Container>
  );
};

export default Auth;
