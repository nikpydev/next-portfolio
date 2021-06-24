import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="text-section">
        <div className="heading-primary">
          <h1 className="header-1">Hey Hey,</h1>
          <h1 className="header-1">
            I&apos;m{' '}
            <span className="nikhil-text" style={{ color: '#128C7E' }}>
              Nikhil
            </span>
          </h1>
        </div>
        <p className="about-text">
          I&apos;m a Full Stack (MEAN, MERN, & MEVN) Framework/Library Agnostic
          Web Developer who has a passion for web and mobile technologies, and
          using programming to solve real-world problems.
        </p>
        <h3 className="header-3">
          Following are a few of my portfolio projects:-
        </h3>
      </div>

      <figure className="avatar-section">
        <Image
          className="avatar-img"
          src={require('../img/webdev.jpg')}
          alt="Web Developer Logo"
        />
      </figure>
    </header>
  );
};

export default Header;
