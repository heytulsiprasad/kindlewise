import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Greet,
  TopContainer,
  AlertText,
  LogoutBtn,
  FormContainer,
} from '../styles/Overview.styles';
import { Button } from '../styles/global.styles';

const Overview = ({ error }) => {
  const userName = useSelector((state) => state.auth.profile.workspace_name);
  const dispatch = useDispatch();

  const fileSubmit = async (e) => {
    console.log(e.target.files);

    const file = e.target.files[0];

    let formData = new FormData();
    formData.append('htmlInput', file);

    const response = await fetch('http://localhost:5000/upload-file', {
      method: 'POST',
      body: formData,
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <Container>
      <TopContainer>
        <Greet>Hey, {userName} 👋</Greet>
        <FormContainer onSubmit={fileSubmit}>
          <input
            type="file"
            id="file"
            name="htmlInput"
            className="html-input"
            accept=".html"
            required
            onChange={fileSubmit}
          />
          <Button as="label" htmlFor="file">
            Add highlights
          </Button>
        </FormContainer>
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
