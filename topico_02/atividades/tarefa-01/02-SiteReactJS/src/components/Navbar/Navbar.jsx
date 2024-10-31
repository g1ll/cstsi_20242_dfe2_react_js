// import React from "react";
import './navbar.css'
import appLogo from './../../assets/appLogo.svg';

export const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_logo">
        <a href="{{route('landing')}}">
        <img src={appLogo}  className="nav_logo_img" />
        </a>
      </div>
      <div className="nav_links">
        {/* @auth */}
        <a  href="{{ url('/dashboard') }}">
          Dashboard
        </a>
        {/* @else */}
        <a href="{{ route('login') }}">
          Log in
        </a>
        {/* @if (Route::has('register')) */}
        <a href="{{ route('register') }}">
          Register
        </a>
        {/* @endif @endauth */}
      </div>
    </nav>
  );
};
