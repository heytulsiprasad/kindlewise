import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Greet, TopContainer } from '../styles/Auth.styles';
import { Button } from '../styles/global.styles';
import * as aTypes from '../../Background/constants';

const Auth = () => {
  const dispatch = useDispatch();

  const loginWithNotion = () => {
    const baseURL = 'https://api.notion.com/v1/oauth/authorize';
    const clientId = '519f985f-7114-4732-902e-b31c2020a2d9';
    const clientSecret = 'secret_1g6LfkbuK4HB7kTy2lDwzF1MmxfAMrRTlK61G7vcZpx';
    const redirectURI = 'http://localhost:5000/notion-redirect';
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
      if (e.data && e.data.code) {
        // POST request to get access token
        const response = await fetch('https://api.notion.com/v1/oauth/token', {
          method: 'POST',
          headers: {
            Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'authorization_code',
            code: e.data.code,
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
