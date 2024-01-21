import { NavLink } from "react-router-dom";
import { ListItem, StyledNavigation, UnorderedList } from "./styled";
import { battle_royale, fps, przygodowe, rpg, zrecznosciowe } from "../../routes";

const Navigation = () => (
  <StyledNavigation>
    <UnorderedList>
      <ListItem>
        <NavLink to={fps}>FPS</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={rpg}>RPG</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={zrecznosciowe}>Zręcznościowe</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={przygodowe}>Przygodowe</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={battle_royale}>Battle Royale</NavLink>
      </ListItem>
    </UnorderedList>
  </StyledNavigation>
);

export default Navigation;
