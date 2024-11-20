/* eslint-disable no-undef */
import styled from "styled-components";
import bodyImage from "../assets/imgs/front-end-wallpapers.jpg";

export const HomeStyled = styled.div`
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-image: url(${bodyImage});
  background-repeat: no-repeat;
  background-size: contain;

  color: ${props=>props.theme.color};
  background-color: ${props=>props.theme.mainBgColor};

  /* @media (prefers-color-scheme: light) {
    & {
      background-color: #dceded;
    }
  } */

  @media screen and (min-width: 1280px) {
    & {
      background-size: 50%;
      background-repeat: repeat-x;
    }
  }
`;

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 320px) {
    & {
      padding-top: 50%;
      width: 100vw;
    }
  }

  @media screen and (min-width: 450px) {
    & {
      padding-top: 40%;
      width: 100vw;
    }
  }

  @media screen and (min-width: 680px) {
    & {
      width: 75vw;
      padding-top: 30%;
    }
  }

  @media screen and (min-width: 1280px) {
    & {
      width: 50vw;
      padding-top: 10%;
    }
  }
`;
