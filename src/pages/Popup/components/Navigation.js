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

const Navigation = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.isAuthenticated);
  const active = useSelector((state) => state.location.active);
  const profile = useSelector((state) => state.auth.profile.image);
  const name = useSelector((state) => state.auth.profile.name);
  const updatePage = (page) =>
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });

  return (
    <NavContainer>
      <NavHeader>
        <HeadingXL>Kindlewise</HeadingXL>
        {auth && (
          <Profile>
            <img src={profile} alt={name} />
          </Profile>
        )}
      </NavHeader>
      {auth && (
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
