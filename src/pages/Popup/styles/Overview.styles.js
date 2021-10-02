import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Greet = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.6rem;
  text-align: center;
`;

export const TopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 2rem;
`;

export const AlertText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.alert};
  text-align: center;
  font-weight: 700;
`;

export const LogoutBtn = styled.button`
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.alert};
  cursor: pointer;
  width: max-content;
  align-self: center;
  background-color: transparent;
  font-weight: 700;
  font-size: 1.2rem;
`;
