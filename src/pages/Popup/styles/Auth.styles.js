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
