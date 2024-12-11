import Header from "../components/Header/Header.jsx";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { GuestStyled } from "./layouts.styled.js";

function Guest() {
  return (
    <GuestStyled>
      <Navbar />
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer/>
    </GuestStyled>
  );
}

export default Guest;
