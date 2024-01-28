import { Link } from "react-router-dom";
import { LinksContainer, Sidebar, StyledLink, StyledSteamIcon, StyledYoutubeIcon } from "./styled";

const Aside = ({header}) => (
  <Sidebar>
    <LinksContainer>
      <StyledLink to={"#" + header} smooth>
        {header}
      </StyledLink>
      <StyledLink to="#przedstawiciele" smooth>
        Przedstawiciele
      </StyledLink>
    </LinksContainer>
    <LinksContainer>
      <Link
        href="https://www.youtube.com/gaming"
        rel="noreferrer"
        target="_blank"
      >
        <StyledYoutubeIcon />
      </Link>
      <Link
        href="https://store.steampowered.com/"
        rel="noreferrer"
        target="_blank"
      >
        <StyledSteamIcon />
      </Link>
    </LinksContainer>
  </Sidebar>
);

export default Aside