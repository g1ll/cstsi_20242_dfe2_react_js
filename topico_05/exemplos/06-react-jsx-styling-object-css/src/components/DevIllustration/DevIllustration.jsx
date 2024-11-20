/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import frontImg from "../../assets/imgs/frontdev2.png";

export default function DevIllustration({isThemeLight}){
  return (
     <div
        style={{
          width: "50vw",
          aspectRatio: 1,
          backgroundImage: "url('/img/frontdev.png')",
          // backgroundImage: `url('${frontImg}')`,
          backgroundSize: "85%",
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: isThemeLight ? "lightblue" : "gray",
          borderRadius: "50%",
        }}
      ></div>
  )
}
