import React, { useContext } from 'react';

import PaneRouter from '../context/PaneRouter';
import {
  NavContainer,
  NavHeader,
  Profile,
  NavBottom,
  ButtonContainer,
  Button,
} from '../styles/Navigation.styles';
import { HeadingXL } from '../styles/Typography.styles';

const Navigation = ({ auth, profile }) => {
  const { pane, setPane } = useContext(PaneRouter);

  const setCurrentPane = (tab) => {
    setPane({ active: tab });
  };

  return (
    <NavContainer>
      <NavHeader>
        <HeadingXL>Kindlewise</HeadingXL>
        {auth && (
          <Profile>
            <img
              src="https://miro.medium.com/max/400/1*B8c1ED3QV_yaa6PAWqDgMw.png"
              alt="User Profile"
            />
          </Profile>
        )}
      </NavHeader>
      {auth && (
        <NavBottom>
          <ButtonContainer>
            <Button
              active={pane.active === 'overview'}
              onClick={() => setCurrentPane('overview')}
            >
              Overview
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              active={pane.active === 'logs'}
              onClick={() => setCurrentPane('logs')}
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
