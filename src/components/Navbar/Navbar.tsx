import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <nav className={`navbar ${show && 'black'}`}>
      <div className="navbar__contents">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
            />
          </Link>
        </div>
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/new">New & Popular</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;