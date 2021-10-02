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
  background: linear-gradient(
    88.65deg,
    rgba(86, 88, 147, 0.58) 12.52%,
    #acb2cb 98.15%,
    rgba(172, 178, 203, 0.54) 114.97%
  );
  box-shadow: 0px 4px 24px -2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 1.4rem 5.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    transition: 0.2s translateY ease;
    transform: translateY(-1px);
  }
`;
