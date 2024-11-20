/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DevIllustrationStyled } from "./DevIllustration.styles";

export default function DevIllustration({ isThemeLight }) {
  
  console.log({isThemeLight})
  return (
    <DevIllustrationStyled $isThemeLight={isThemeLight}/>
  );
}
