import React from "react";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div>
        <a>499 Final Project </a>
        <span>&copy; 2021.</span>
      </div>
      <div className="ml-auto">
        <span>Powered by </span>
        <span>
          <a href="https://www.linkedin.com/in/aaron-au-7030141a0/">Aaron Au</a>
          <span> && </span>
          <a href="https://www.linkedin.com/in/paul-lim-643b1916b/">Paul Lim</a>
          <span> && </span>
          <a href="https://www.linkedin.com/in/yuhang-chen-036a08157/">
            Tony Chen
          </a>
        </span>
      </div>
    </footer>
  );
}
