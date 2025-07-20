import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay }) {
  const isCurrentSongPlaying = isPlaying && activeSong?.title === song.title;

  return isCurrentSongPlaying ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  );
}

export default PlayPause;

