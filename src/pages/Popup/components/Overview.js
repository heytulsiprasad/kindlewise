import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Greet,
  TopContainer,
  AlertText,
  LogoutBtn,
} from '../styles/Overview.styles';
import { Button } from '../styles/global.styles';

const Overview = ({ error }) => {
  const userName = useSelector((state) => state.auth.profile.name);
  const dispatch = useDispatch();

  return (
    <Container>
      <TopContainer>
        <Greet>Good Evening, {userName} 👋</Greet>
        <Button>Add highlights</Button>
        {error && (
          <AlertText>
            File format not supported. Try adding HTML/CSV format.
          </AlertText>
        )}
        <LogoutBtn onClick={() => dispatch({ type: 'SET_LOGOUT_SUCCESS' })}>
          Logout
        </LogoutBtn>
      </TopContainer>
    </Container>
  );
};

export default Overview;
