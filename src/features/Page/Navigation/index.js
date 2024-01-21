import { useRef } from "react";
import { CloseButton, MenuListItem, Button, ListItem, StyledNavLink, StyledNavigation, UnorderedList } from "./styled";
import { battle_royale, fps, przygodowe, rpg, symulatory, zrecznosciowe } from "../../routes";
import close from "../../../images/close.svg"
import menu from "../../../images/menu.svg"

const Navigation = () => {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive")
  }

  return(
    <StyledNavigation>
      <UnorderedList ref={navRef}>
        <ListItem>
          <StyledNavLink to={fps}>FPS</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={rpg}>RPG</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={zrecznosciowe}>Zręcznościowe</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={przygodowe}>Przygodowe</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={battle_royale}>Battle Royale</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to={symulatory}>Symulatory</StyledNavLink>
        </ListItem>
        <MenuListItem>
          <CloseButton onClick={showNavBar}>
            <img src={close} alt=""/>
          </CloseButton>
        </MenuListItem>
      </UnorderedList>
      <Button onClick={showNavBar}>
        <img src={menu} alt=""/>
      </Button>
    </StyledNavigation>
)};

export default Navigation;
