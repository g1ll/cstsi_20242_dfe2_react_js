/* eslint-disable no-undef */
import styled, { css } from "styled-components";

export const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(3) img {
      animation: logo-spin infinite 20s linear;
    }
  }

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

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  // display:block;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
`;

export const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

export const ReactLogo = styled(Logo)`
  &:hover {
    filter: drop-shadow(0 0 1em #00d9fa) contrast(100%) brightness(200%);
  }
`;

export const CSS3Logo = styled(Logo)`
  ${(props) => {
    switch (props.$theme) {
      case "dark":
        return css`
          filter: contrast(50%) grayscale(50%);
        `;
      default:
        return css`
          filter: contrast(30%) brightness(175%);
        `;
    }
  }}
  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 2em #646cffaa) contrast(100%) brightness(100%);
  }
`;
