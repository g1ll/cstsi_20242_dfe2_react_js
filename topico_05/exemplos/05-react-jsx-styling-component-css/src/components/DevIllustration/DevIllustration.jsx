/* eslint-disable react/prop-types */
import frontImg from "../../assets/imgs/frontdev2.png";

const DevIllustration = ({ isThemeLight }) => {
  return (
    <>
      <style>
        {`.dev{
          width: 50vw;
          aspect-ratio: 1;
        //   background-image: url('/img/frontdev.png');
          background-image: url('${frontImg}');
          background-size: 85%;
          background-repeat:no-repeat;
          background-position: center;
          background-color: ${isThemeLight ? "lightblue" : "gray"};
          border-radius: 50%
          }`}
      </style>
      <div className="dev"></div>
    </>
  );
};

export default DevIllustration;
