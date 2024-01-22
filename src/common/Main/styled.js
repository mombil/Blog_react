import styled from "styled-components";

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
  height: 563px;

  @media (max-width: ${({theme}) => theme.breakpoints.largeDevices}) {
    width: 230px;
    height: 345px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mediumDevices}) {
    width: 116px;
    height: 163px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.smallDevices}) {
    width: 116px;
    height: 163px;
  }
`