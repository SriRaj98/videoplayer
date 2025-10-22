import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

const Banner = () => {
  const [movie, _] = useState({
    title: "Sample Movie",
    description: "This is a sample description for our Netflix-like interface. You can replace this with actual movie data from an API."
  });

  useEffect(() => {
    // Here you would typically fetch movie data from an API
  }, []);

  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/sample-backdrop.jpg')`
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="banner__button">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.description, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;