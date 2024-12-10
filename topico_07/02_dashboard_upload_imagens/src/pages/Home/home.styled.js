import styled from "styled-components";

export const HomeMainStyled = styled.div`
  width: 100%;

  @media (min-width: 1536px) {
    max-width: 1280px;
  }
`;

export const HomeGridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  height: fit-content;
  min-height: 20rem /* 320px */;
  column-gap: 2rem /* 32px */;
  row-gap: 1.25rem /* 20px */;
  @media (min-width: 640px) {
    width: fit-content;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 2rem /* 32px */;
  }
`;
