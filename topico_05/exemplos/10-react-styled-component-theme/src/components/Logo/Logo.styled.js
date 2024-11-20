/* eslint-disable no-undef */
import styled, { css } from "styled-components";

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

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: logo-spin infinite 20s linear;
    }
  }

`;

export const CSS3Logo = styled(Logo)`
  ${(props) => {
    switch (props.theme.name) {
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
