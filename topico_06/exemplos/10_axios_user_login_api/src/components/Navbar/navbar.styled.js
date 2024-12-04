import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-height: 4rem;
  background-color: #1e40af;
  padding-top: 0.5rem;
`;

export const NavLogo = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-start;
  img{
    width: 3rem /* 48px */;
    height: 3rem /* 48px */;
  }
`;

export const NavLinks = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 75%;
    text-align: center;

    a{
        margin-top: 1rem;
    color: darkgray;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    }

    a:hover{
        color:whitesmoke
    }

    @media (min-width: 640px) {
        width: 30%;
    }

    @media (min-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1024px) {
        width: 20%;
    }

    @media (min-width: 1280px) {
        width: 15%;
    }

    @media (min-width: 1960px) {
        width: 10%;
    }

    @media (min-width: 2200px) {
        width: 8%;
    }
`;
