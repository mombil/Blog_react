import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { ReactComponent as YoutubeIcon } from "../../../images/youtube.svg";
import { ReactComponent as SteamIcon } from "../../../images/steam.svg";

export const Sidebar = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 100px;
  grid-area: sidebar;
  padding: 8px;
  width: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
    width: 100px;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
`;

export const StyledLink = styled(HashLink)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  font-size: 18px;
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

export const Link = styled.a`
  text-align: center;
`;

export const StyledYoutubeIcon = styled(YoutubeIcon)`
  width: 100px;
  height: auto;
  fill: ${({ theme }) => theme.colors.secondaryColor};
  &:hover {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(160%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
    width: 80px;
  }
`;

export const StyledSteamIcon = styled(SteamIcon)`
  width: 100px;
  height: auto;
  fill: ${({ theme }) => theme.colors.secondaryColor};
  &:hover {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(160%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
    width: 80px;
  }
`;
