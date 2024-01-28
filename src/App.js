import Header from "./common/Header";
import Navigation from "./features/Navigation";
import { Container } from "./common/Container";
import RoutesContainer from "./features/Routes/index";
import Footer from "./common/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Navigation />
      <RoutesContainer />
      <Footer />
    </Container>
  );
}

export default App;
