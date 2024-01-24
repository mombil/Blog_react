import { Description, StyledMain, Header, Container, Poster, Article, PosterTitle, Sidebar, StyledLink, LinksContainer, Link, StyledSteamIcon, StyledYoutubeIcon } from "./styled"

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
            <StyledYoutubeIcon/>
          </Link>
          <Link href="https://store.steampowered.com/" rel="noreferrer" target="_blank">
            <StyledSteamIcon/>
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