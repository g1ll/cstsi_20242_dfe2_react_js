/* eslint-disable no-undef */
import styled from "styled-components";
import frontImg from "../../assets/imgs/frontdev2.png";

export const DevIllustrationStyled = styled.div`
    width: 50vw;
    aspect-ratio: 1;
    background-image: url("${frontImg}");
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props=>props.$bgColor};
    /* background-color: ${props=>props.theme.illustBgColor}; */
    border-radius: 50%;
  `;