/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ThemeContext } from "styled-components";
import { DevIllustrationStyled } from "./DevIllustration.styles";
import { useContext } from "react";

export default function DevIllustration() {
  
  const themeContext = useContext(ThemeContext)
  console.log({themeContext})

  return (
    <DevIllustrationStyled $bgColor={themeContext.illustBgColor}/>
    // <DevIllustrationStyled />
  );
}
