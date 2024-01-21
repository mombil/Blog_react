import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  grid-area: navigation;
  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    display: flex;
    justify-content: end;
  }
`;

export const UnorderedList = styled.ul.attrs(props => ({
  className: props.className
}))`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: 1s;
    transform: translateY(-100vh);
    background-color: ${({theme}) => theme.colors.backgroundColor};

    &.responsive {
      transform: none;
    }
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  color: white;
  margin: 10px 0;
`;

export const MenuListItem = styled(ListItem)`
@media only screen and (min-width: ${({theme}) => theme.breakpoints.largeDevices}) {
  display: none;
}
`

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  font-size: 20px;
  &.active {
    font-weight: 600;
    filter: brightness(140%);
  }
  &:hover {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(160%);
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 0;
  margin: 0 20px 0 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  display: none;

  @media only screen and (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    display: block;
    opacity: 1;
  }
`

export const CloseButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`