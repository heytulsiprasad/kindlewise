import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  NavContainer,
  NavHeader,
  Profile,
  NavBottom,
  ButtonContainer,
  Button,
} from '../styles/Navigation.styles';
import { HeadingXL } from '../styles/Typography.styles';
import * as aTypes from '../../Background/constants';

const Navigation = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const active = useSelector((state) => state.location.active);
  const profile = useSelector((state) => state.auth.profile);
  const updatePage = (page) =>
    dispatch({ type: aTypes.SET_CURRENT_PAGE, payload: page });

  return (
    <NavContainer>
      <NavHeader>
        <HeadingXL>Kindlewise</HeadingXL>
        {isAuthenticated && (
          <Profile>
            <img src={profile.workspace_icon} alt={profile.workspace_name} />
          </Profile>
        )}
      </NavHeader>
      {isAuthenticated && (
        <NavBottom>
          <ButtonContainer>
            <Button
              active={active === 'Overview'}
              onClick={() => updatePage('Overview')}
            >
              Overview
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              active={active === 'Logs'}
              onClick={() => updatePage('Logs')}
            >
              Logs
            </Button>
          </ButtonContainer>
        </NavBottom>
      )}
    </NavContainer>
  );
};

export default Navigation;
