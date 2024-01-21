import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "title title"
    "sidebar navigation"
    "sidebar main";
  height: 100%;
`;

export const Sidebar = styled.aside`
  background-color: yellow;
  grid-area: sidebar;
`;

export const Main = styled.main`
  background-color: blue;
  grid-area: main;
`;
