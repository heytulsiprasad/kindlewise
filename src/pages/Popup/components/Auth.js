import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Greet, TopContainer } from '../styles/Auth.styles';
import { Button } from '../styles/global.styles';

const user = {
  name: 'Lemon Lifestyle',
  image: 'https://miro.medium.com/max/400/1*B8c1ED3QV_yaa6PAWqDgMw.png',
};

const Auth = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <TopContainer>
        <Greet>Welcome to Kindlewise</Greet>
        <Button
          onClick={() => dispatch({ type: 'SET_LOGIN_SUCCESS', payload: user })}
        >
          Login with Notion
        </Button>
      </TopContainer>
    </Container>
  );
};

export default Auth;
