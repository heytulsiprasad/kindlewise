import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Greet, TopContainer } from '../styles/Auth.styles';
import { Button } from '../styles/global.styles';
import * as aTypes from '../../Background/constants';
import { backendUrl } from '../config';
import { clientId } from '../secrets';

const Auth = () => {
  const dispatch = useDispatch();

  const loginWithNotion = () => {
    const baseURL = 'https://api.notion.com/v1/oauth/authorize';
    const redirectURI = `${backendUrl}/notion-redirect`;
    const responseType = 'code';
    const owner = 'user';

    const width = 400;
    const height = 700;
    const posLeft = window.screen.width / 2 - width / 2;
    const posTop = window.screen.height / 2 - height / 2;

    const newWindow = window.open(
      `${baseURL}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectURI
      )}&response_type=${responseType}&owner=${owner}`,
      'Auth with Notion',
      `height=700, width=400, top=${posTop}, left=${posLeft}`
    );

    if (window.focus) newWindow.focus();

    window.onmessage = async (e) => {
      if (e.data && e.data.access_token) {
        const responseData = e.data;

        // Closes auth popup window
        newWindow.close();

        dispatch({ type: aTypes.SET_LOGIN_SUCCESS, payload: responseData });
      }
    };
  };

  return (
    <Container>
      <TopContainer>
        <Greet>Welcome to Kindlewise</Greet>
        <Button onClick={loginWithNotion}>Login with Notion</Button>
      </TopContainer>
    </Container>
  );
};

export default Auth;
