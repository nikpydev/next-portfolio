import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__col-1">
        <h3 className="footer-header">
          Call me, Beep me{" "}
          <span role="img" aria-label="pager">
            📟
          </span>
        </h3>
        <p className="phone contact">+91 83403 44169</p>
        <p className="email contact">nc1336282@gmail.com</p>
      </div>

      <div className="footer__col-2">
        <h3 className="footer-header">
          Check me out{" "}
          <span role="img" aria-label="eyes">
            👀
          </span>
        </h3>
        <ul className="footer__nav">
          <li className="footer__nav-item footer__nav-item--1">
            <a
              href="https://github.com/nikpydev"
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__nav-item footer__nav-item--2">
            <a
              href="https://www.linkedin.com/in/nikhil-choudhary-bb56bb105/"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">
        © Made with{" "}
        <span role="img" aria-label="heart">
          💝
        </span>{" "}
        by Nikhil Choudhary
      </p>
    </footer>
  );
};

export default Footer;
