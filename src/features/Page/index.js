import { Container, Main, Sidebar } from "./styled";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { battle_royale, fps, home, przygodowe, rpg, symulatory, zrecznosciowe } from "../routes";

const Page = () => (
  <Container>
    <Header />
    <Sidebar>aasdsd</Sidebar>
    <Navigation />
    <Routes>
      <Route path={fps} element={<Main/>} />
      <Route path={rpg} element={<Main/>} />  
      <Route path={zrecznosciowe} element={<Main/>} />
      <Route path={przygodowe} element={<Main/>} />
      <Route path={battle_royale} element={<Main/>} />
      <Route path={symulatory} element={<Main/>} />
      <Route path={home} element={<Main/>} />
    </Routes>
    <Main>asd</Main>
  </Container>
);

export default Page;
