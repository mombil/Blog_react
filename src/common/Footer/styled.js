import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 4px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  font-size: 16px;
  &:hover {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(160%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
    font-size: 12px;
  }
`;
