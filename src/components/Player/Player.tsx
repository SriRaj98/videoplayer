import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import './Player.scss';
import { portNumber } from '../../service/constants';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultAudioLayout,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

const Player = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const test = 'raspberrypi.local';
  const apiPath = `http://${test}:${portNumber}`;
  const source = `${apiPath}/video`;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!videoRef.current) return;

      switch (e.key.toLowerCase()) {
        case 'f':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            videoRef.current.requestFullscreen();
          }
          break;
        case ' ':
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
          e.preventDefault();
          break;
        case 'arrowleft':
          videoRef.current.currentTime -= 10;
          e.preventDefault();
          break;
        case 'arrowright':
          videoRef.current.currentTime += 10;
          e.preventDefault();
          break;
        case 'arrowup':
          videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1);
          e.preventDefault();
          break;
        case 'arrowdown':
          videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
          e.preventDefault();
          break;
        case 'escape':
          navigate('/');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <div className="player">
      <button className="player__back" onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <MediaPlayer title="Movie" src={source} autoPlay>
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
};

export default Player;