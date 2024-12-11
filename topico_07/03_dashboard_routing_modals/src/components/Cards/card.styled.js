/* eslint-disable no-undef */
import styled from "styled-components";

export const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  aspect-ratio: 3/4;
  width: 91.666667%;
  height: 100%;
  border-radius: 0.5rem /* 8px */;
  border: 2px solid #1d4ed8;
  background-color: #4ade80;
  box-shadow: 0px 2px 6px #438c5e, 0px 3px 6px #438c5e;

  a {
    text-decoration: none;
  }

  @media (min-width: 640px) {
      width: 100%;
  }

  @media (min-width: 768px) {
      height: 20rem /* 320px */;
      overflow: hidden;
  }
`;

export const CardMain = styled.div`
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    margin-bottom: 0.75rem /* 12px */;
    text-align: center;
    font-weight: 700;
    color: #0c0c0c;
  }

  h4 {
    text-align: center;
    font-weight: 700;
    color: #1e40af;
    text-shadow: #f3f4f6;
  }

  p {
    font-size: 3vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-wrap: wrap;
    text-align: center;
    color: #0c0c0c;
  }

  @media (min-width: 640px) {
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        color: #0c0c0c;
        font-size: 2vw;
      }
  }

  @media (min-width: 768px) {
      p {
        font-size: 1rem;
      }
  }
`;

export const CardImage = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  align-items: center;
  background-color: #e0f2fe;

  img {
    height: 83.33%;
    width: 100%;
    object-fit: fill;
    aspect-ratio: 3/4;
  }

  @media (min-width: 640px) {
      img{ 
        aspect-ratio: 1;
      }
  }

  @media (min-width: 768px) {
      width: 100%;
      height: 200px;
  }
`;
