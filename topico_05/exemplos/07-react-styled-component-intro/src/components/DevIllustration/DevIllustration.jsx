/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import frontImg from "../../assets/imgs/frontdev2.png";
import styled from "styled-components";

export default function DevIllustration({ isThemeLight }) {
  const DevIllustrationStyled = styled.div`
    width: 50vw;
    aspect-ratio: 1;
    background-image: url("${frontImg}");
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${isThemeLight ? "lightblue" : "gray"};
    border-radius: 50%;
  `;
  return <DevIllustrationStyled />;
}
