import { HeaderStyled, Logo, Title } from "./styled";
import logo from "../../../images/logo.svg";

const Header = () => (
  <HeaderStyled>
    <Logo src={logo} alt=""></Logo>
    <Title>GRY</Title>
  </HeaderStyled>
);

export default Header;
