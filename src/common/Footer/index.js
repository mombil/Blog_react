import { Link, Paragraph, StyledFooter } from "./styled";

const Footer = () => (
  <StyledFooter>
    <Paragraph>Stronę wykonał Paweł Brejnak</Paragraph>
    <Link
      href="https://github.com/mombil/Games_react"
      rel="noreferrer"
      target="_blank"
    >
      Szczegółowe informacje o stronie
    </Link>
  </StyledFooter>
);

export default Footer;
