import { Description, StyledMain, Header, Container, Poster, Article, PosterTitle, Sidebar, StyledLink, LinksContainer, LinkImg, Link } from "./styled"
import youtubeIcon from "../../images/youtube.svg"
import steamIcon from "../../images/steam.svg"

const Main = ({header, description, representatives}) => {
  return (
    <>
      <Sidebar>
        <LinksContainer>
          <StyledLink to={"#" + header} smooth>{header}</StyledLink>
          <StyledLink to="#przedstawiciele" smooth>Przedstawiciele</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <Link href="https://www.youtube.com/gaming" rel="noreferrer" target="_blank">
            <LinkImg src={youtubeIcon} alt=""/>
          </Link>
          <Link href="https://store.steampowered.com/" rel="noreferrer" target="_blank">
            <LinkImg src={steamIcon} alt=""/>
          </Link>
        </LinksContainer>
      </Sidebar>
      <StyledMain>
        <Header id={header}>{header}</Header>
        <Description>{description}</Description>
        <Header id="przedstawiciele">Przedstawiciele</Header>
        <Container>
          {
            representatives?.map(game => (
              <Article key={game.title}>
                <PosterTitle>{game.title}</PosterTitle>
                <Poster src={game.img} alt=""/>
              </Article>
            ))
          }
        </Container>
      </StyledMain>
    </>
  )
}

export default Main