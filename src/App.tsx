import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import Player from './components/Player/Player';

function App() {
  // Sample movie data with actual poster images
  const sampleMovies = [
    {
      id: 1,
      poster_path: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      title: 'Stranger Things'
    },
    {
      id: 2,
      poster_path: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
      title: 'The Witcher'
    },
    {
      id: 3,
      poster_path: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
      title: 'Avengers'
    },
    {
      id: 4,
      poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/t7I942V5U1Ggn6OevN75u3sNYH9.jpg',
      title: 'Breaking Bad'
    },
        {
      id: 1,
      poster_path: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      title: 'Stranger Things'
    },
    {
      id: 2,
      poster_path: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
      title: 'The Witcher'
    },
    {
      id: 3,
      poster_path: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eDo0pNruy0Qgj6BdTyHIR4cxHY8.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
      title: 'Materialists'
    },
    {
      id: 4,
      poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/t7I942V5U1Ggn6OevN75u3sNYH9.jpg',
      title: 'Breaking Bad'
    }
  ];

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/player" element={<Player />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Banner />
                <Row title="NETFLIX ORIGINALS" movies={sampleMovies} isLargeRow />
                <Row title="Trending Now" movies={sampleMovies} />
                <Row title="Top Rated" movies={sampleMovies} />
                <Row title="Action Movies" movies={sampleMovies} />
                <Row title="Comedy Movies" movies={sampleMovies} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;