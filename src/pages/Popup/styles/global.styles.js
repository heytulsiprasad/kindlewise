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

export const Button = styled.button`
  background-image: linear-gradient(
    45deg,
    rgba(134, 201, 110, 0.8),
    rgba(20, 255, 0, 0.54),
    rgba(86, 88, 147, 0.58),
    rgba(172, 178, 203, 0.54)
  );
  background-position: ${(props) => (props.status ? 'left' : 'right')};
  background-size: 300%;
  box-shadow: 0px 4px 24px -2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 1.4rem 5.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: background-position 350ms;

  :hover {
    background-position: left;
  }
`;
