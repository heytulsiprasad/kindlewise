import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.violetLight};
`;

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

export const Profile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 50%;

  img {
    height: 100%;
    width: auto;
    display: block;
  }
`;

export const NavBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) =>
    props.active ? props.theme.colors.violetDark : props.theme.colors.violet};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
