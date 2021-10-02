import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 2rem 2.5rem;
  flex-grow: 1;
`;
