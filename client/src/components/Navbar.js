import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <img className="logo" src="/logo_agrosuper.png" alt="Logo" />
        </a>
        <span className="right">
          <a href="#">
            <img className="icon" src="https://img.icons8.com/pulsar-line/256/settings.png" alt="Settings" />
          </a>
          <a href="#">
            <img className="icon" src="https://img.icons8.com/pulsar-line/256/name.png" alt="Name" />
          </a>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
