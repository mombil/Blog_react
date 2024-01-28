import Aside from "./Aside";
import {
  Description,
  StyledMain,
  Header,
  Container,
  Poster,
  Article,
  PosterTitle,
} from "./styled";

const Main = ({ header, description, representatives }) => {
  return (
    <>
      <Aside header={header} />
      <StyledMain>
        <Header id={header}>{header}</Header>
        <Description>{description}</Description>
        <Header id="przedstawiciele">Przedstawiciele</Header>
        <Container>
          {representatives?.map(game => (
            <Article key={game.title}>
              <PosterTitle>{game.title}</PosterTitle>
              <Poster src={game.img} alt="" />
            </Article>
          ))}
        </Container>
      </StyledMain>
    </>
  );
};

export default Main;
