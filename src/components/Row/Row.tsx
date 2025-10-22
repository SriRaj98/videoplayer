import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Row.scss';

interface RowProps {
  title: string;
  isLargeRow?: boolean;
  movies?: Array<{
    id: number;
    poster_path: string;
    backdrop_path: string;
    name?: string;
    title?: string;
  }>;
}

const Row = ({ title, isLargeRow = false, movies = [] }: RowProps) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(movies);

  useEffect(() => {
    // Here you would typically fetch movies for this row from an API
    setItems(movies);
  }, [movies]);

  return (
    <div className={`row ${isLargeRow ? 'row--large' : ''}`}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {items.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={movie.poster_path}
            alt={movie.name || movie.title}
            onClick={() => navigate('/player')}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;