import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-bottom: 2.5rem;
  background-color: #4ade80;
  height: fit-content;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 3.75rem;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    color: #1e40af;
    text-shadow: #fff;
  }

  h4 {
    width: 83.33%;
    text-align: center;
    color: aliceblue;
    background-color: #60a5fa;
    border-radius: 0.5rem;
    padding: 0.25rem;
    font-weight: 300;
  }

  h4 > span {
    font-size: 10px;
  }

  @media (min-width: 1024px) {
    h4{
        width: 50%;
    }
`;
