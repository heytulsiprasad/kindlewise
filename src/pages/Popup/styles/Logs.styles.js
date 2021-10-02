import styled from 'styled-components';

export const LogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
`;

export const LogBox = styled.div`
  box-shadow: 0px 8px 18px -6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.violetLight};
  border-radius: 8px;
  padding: 2rem 1rem;
  margin: 1rem 0;
  display: flex;
  flex-container: column;
`;

export const HeadingContainer = styled.div`
  color: ${(props) => props.theme.colors.violetDark};
  font-size: 1.4rem;
`;
