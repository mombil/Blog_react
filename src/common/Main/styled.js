import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import {ReactComponent as YoutubeIcon} from "../../images/youtube.svg"
import {ReactComponent as SteamIcon} from "../../images/steam.svg"

export const StyledMain = styled.main`
  grid-area: main;
  padding: 10px;
`;

export const Header = styled.h2`
    color: ${({theme}) => theme.colors.text};
    font-size: 24px;
    
    @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
      font-size: 20px;
    }
`

export const Description = styled.p`
    white-space:pre-wrap;
    color: ${({theme}) => theme.colors.text};
    text-shadow: 1px 1px 2px ${({theme}) => theme.colors.shadow};
    font-size: 16px;
    text-align: justify;

    @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
      font-size: 12px;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  justify-content: center;

  @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
    grid-template-columns: 1fr;
  }
`

export const Article = styled.article`
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items:center
`

export const PosterTitle = styled.h3`
  color: ${({theme}) => theme.colors.text};
  font-size: 20px;
  text-align: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mediumDevices}) {
    font-size: 16px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
    font-size: 14px;
  }
`

export const Poster = styled.img`
  border-radius: 5px;
  width: 399px;
  height: 564px;

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 280px;
    height: 412px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    width: 240px;
    height: 350px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    width: 180px;
    height: 265px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mediumDevices}) {
    width: 116px;
    height: 163px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
    width: 180px;
    height: 265px;
  }
`

export const Sidebar = styled.aside`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 100px;
  grid-area: sidebar;
  padding: 8px;
  width: 150px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    width: 100px;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
`

export const StyledLink = styled(HashLink)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  font-size: 16px;
  &:hover {
    filter: brightness(130%);
  }
  &:active {
    filter: brightness(160%);
  }

  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
  font-size: 12px;
  }
`

export const Link = styled.a`
  text-align: center;
`

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

  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    width: 80px;
  }
`

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

@media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
  width: 80px;
}
`