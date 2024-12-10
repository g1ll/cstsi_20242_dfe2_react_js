import { HeaderContainer, HeaderStyled } from "./header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>
          Black Friday BuyTech
        </h1>
        <h4>
          Tudo pela METADE
          <span >...do triplo</span>
          !!!
        </h4>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
