import styled from "styled-components";

export const ShowMainContent = styled.div`
  width: 100;
  @media (min-width: 1536px) {
    max-width: 1280px;
  }
`;

export const ShowContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  height: fit-content;
  min-height: 20rem /* 320px */;
  column-gap: 2rem /* 32px */;
  row-gap: 1.25rem /* 20px */;
  width: 70vw;

  @media (min-width: 640px) {
    width: 50vw;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1536px) {
    width: 20vw;
    gap: 2rem /* 32px */;
  }
`;
