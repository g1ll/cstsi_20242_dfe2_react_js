import appLogo from "../../assets/appLogo.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { NavContainer, NavLinks, NavLogo } from "./navbar.styled";

export const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <NavContainer>
      <NavLogo>
        <Link href="/">
          <img src={appLogo} className="nav_logo_img" />
        </Link>
      </NavLogo>
      <NavLinks>
        {user?.name ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </NavLinks>
    </NavContainer>
  );
};
