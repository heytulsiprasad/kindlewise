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

    const authURL = `${baseURL}?owner=${owner}&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectURI
    )}&response_type=${responseType}`;

    console.log({ authURL });

    const width = 400;
    const height = 700;
    const posLeft = window.screen.width / 2 - width / 2;
    const posTop = window.screen.height / 2 - height / 2;

    const newWindow = window.open(
      authURL,
      'Auth with Notion',
      `height=700, width=400, top=${posTop}, left=${posLeft}`
    );

    if (window.focus) newWindow.focus();

    window.onmessage = async (e) => {
      if (e.data && e.data.code) {
        const params = e.data;

        const response = await fetch(`${backendUrl}/api/user-credential`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'authorization_code',
            code: params.code,
            redirect_uri: redirectURI,
          }),
        });

        const responseData = await response.json();

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
