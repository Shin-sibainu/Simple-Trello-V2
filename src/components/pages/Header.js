import React from "react";
const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">Simple Trello</a>
      </h1>
      <nav className="pc-nav">
        <ul>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="https://github.com/Shin-sibainu">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/Shin_Engineer">Twitter</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
