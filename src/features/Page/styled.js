import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "title title"
    "sidebar navigation"
    "sidebar main"
    "footer footer";
  height: 100%;
`;


