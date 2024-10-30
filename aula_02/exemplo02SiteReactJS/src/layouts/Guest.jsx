import "./../styles/guest.css";
import Header from "../components/Header/Header.jsx";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home/Home.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

function Guest() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <main className='flex w-full justify-center p-3 sm:p-10 '> */}
      <main className="guest_main">
          <Home />
      </main>
      <Footer/>
    </>
  );
}

export default Guest;
