import { Container, Main, Navigation, Sidebar } from "./styled";
import Header from "./Header";

const Page = () => (
  <Container>
    <Header />
    <Sidebar>a</Sidebar>
    <Navigation>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Navigation>
    <Main>asd</Main>
  </Container>
);

export default Page;
