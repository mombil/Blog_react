import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const HeaderStyled = styled.header`
  grid-area: title;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const StyledLogo = styled(Logo)`
  max-height: 100px;
  width: auto;
`;

export const Title = styled.h1`
  margin: auto auto;
  color: ${({ theme }) => theme.colors.primaryColor};
`;
