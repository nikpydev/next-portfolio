import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-box">
        <figure className="logo-box__fitter">
          <Image
            className="logo-box__img"
            src={require("../img/javascript.png")}
            alt="JavaScript Logo"
          />
        </figure>
      </div>
      <ul className="nav-list">
        <li className="nav-list__item">
          <a
            href="https://drive.google.com/file/d/1XyOfZcNTBTTTk1efmaZx1YZf0CgY13z2/view"
            className="nav-list__item--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </li>
        <li className="nav-list__item">
          <a
            href="https://github.com/nikpydev"
            className="nav-list__item--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </li>
        <li className="nav-list__item">
          <a
            href="https://linkedin.com/in/nikpydev"
            className="nav-list__item--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
