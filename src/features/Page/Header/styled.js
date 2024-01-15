import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: title;

  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Logo = styled.img`
  max-height: 100px;
`;

export const Title = styled.h1`
  margin: auto auto;
`;
