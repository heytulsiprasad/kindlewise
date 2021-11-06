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
import { backendUrl } from '../config';

const Overview = ({ error }) => {
  const userName = useSelector((state) => state.auth.profile.workspace_name);
  const notionToken = useSelector((state) => state.auth.profile.access_token);

  const dispatch = useDispatch();

  const fileSubmit = async (e) => {
    const file = e.target.files[0];

    let formData = new FormData();
    let notionPageId = '';

    formData.append('kindleExport', file);

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      async (tabs) => {
        const currentTab = tabs[0];

        const allPartsOfUrl = currentTab?.url.split('-');

        notionPageId = allPartsOfUrl[allPartsOfUrl?.length - 1];
        console.log({ notionPageId });

        if (notionPageId) {
          const response = await fetch(`${backendUrl}/api/upload-file`, {
            method: 'POST',
            headers: {
              'x-notion-token': notionToken,
              'x-block-token': notionPageId,
            },
            body: formData,
          });

          const parsedResponse = await response.json();

          if (parsedResponse.title && parsedResponse.time) {
            dispatch({ type: 'ADD_NEW_LOG', payload: [parsedResponse] });
          }
        }
      }
    );
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
