import { Container, Sidebar } from "./styled";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { battle_royale, fps, home, przygodowe, rpg, symulatory, zrecznosciowe } from "../routes";
import Main from "../../common/Main";
import { categories } from "../../categories";


const Page = () => (
  <Container>
    <Header />
    <Sidebar>aasdsd</Sidebar>
    <Navigation />
    <Routes>
      <Route path={fps} element={<Main header={categories.fps.title} description={categories.fps.description} representatives={categories.fps.representatives}/>} />
      <Route path={rpg} element={<Main header={categories.rpg.title} description={categories.rpg.description} representatives={categories.rpg.representatives}/>} />  
      <Route path={zrecznosciowe} element={<Main header={categories.zrecznosciowe.title} description={categories.zrecznosciowe.description} representatives={categories.zrecznosciowe.representatives}/>} />
      <Route path={przygodowe} element={<Main header={categories.przygodowe.title} description={categories.przygodowe.description} representatives={categories.przygodowe.representatives}/>} />
      <Route path={battle_royale} element={<Main header={categories.battle_royale.title} description={categories.battle_royale.description} representatives={categories.battle_royale.representatives}/>} />
      <Route path={symulatory} element={<Main header={categories.symulatory.title} description={categories.symulatory.description} representatives={categories.symulatory.representatives}/>} />
      <Route path={home} element={<Main header={categories.fps.title} description={categories.fps.description} representatives={categories.rpg.representatives}/> } />
    </Routes>
  </Container>
);

export default Page;
