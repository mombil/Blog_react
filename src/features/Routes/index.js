import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../../features/Main";
import { categories } from "../../categories";

export const fps = "/fps";
export const rpg = "/rpg";
export const zrecznosciowe = "/zręcznościowe";
export const przygodowe = "/przygodowe";
export const battle_royale = "/battle_royale";
export const symulatory = "/symulatory";
export const home = "/";

const RoutesContainer = () => (
  <Routes>
    <Route
      path={fps}
      element={
        <Main
          header={categories.fps.title}
          description={categories.fps.description}
          representatives={categories.fps.representatives}
        />
      }
    />
    <Route
      path={rpg}
      element={
        <Main
          header={categories.rpg.title}
          description={categories.rpg.description}
          representatives={categories.rpg.representatives}
        />
      }
    />
    <Route
      path={zrecznosciowe}
      element={
        <Main
          header={categories.zrecznosciowe.title}
          description={categories.zrecznosciowe.description}
          representatives={categories.zrecznosciowe.representatives}
        />
      }
    />
    <Route
      path={przygodowe}
      element={
        <Main
          header={categories.przygodowe.title}
          description={categories.przygodowe.description}
          representatives={categories.przygodowe.representatives}
        />
      }
    />
    <Route
      path={battle_royale}
      element={
        <Main
          header={categories.battle_royale.title}
          description={categories.battle_royale.description}
          representatives={categories.battle_royale.representatives}
        />
      }
    />
    <Route
      path={symulatory}
      element={
        <Main
          header={categories.symulatory.title}
          description={categories.symulatory.description}
          representatives={categories.symulatory.representatives}
        />
      }
    />
    <Route path="*" element={<Navigate to={fps} />} />
  </Routes>
);

export default RoutesContainer;
