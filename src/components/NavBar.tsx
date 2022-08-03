import React from "react";

interface NavBarProps {
  totalCounters: number;
}
function NavBar({ totalCounters }: NavBarProps) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill text-bg-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
