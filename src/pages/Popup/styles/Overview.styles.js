import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Greet = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  text-align: center;
`;

export const TopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 2rem;
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
