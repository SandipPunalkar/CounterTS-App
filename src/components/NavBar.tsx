import React from "react";

interface NavBarProps {
  items: number;
}
function NavBar({ items }: NavBarProps) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
    </nav>
  );
}

export default NavBar;
