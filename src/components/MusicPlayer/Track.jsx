import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => {
  const title = activeSong?.title || activeSong?.attributes?.name || 'No active Song';
  const artist = activeSong?.subtitle || activeSong?.attributes?.artistName || 'No active Song';

  const rawImage =
    activeSong?.images?.coverart ||
    activeSong?.attributes?.artwork?.url?.replace('{w}', '125')?.replace('{h}', '125');

  const image = rawImage || '/default.jpg';

  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={image} alt="cover art" className="rounded-full w-16 h-16 object-cover" />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">{title}</p>
        <p className="truncate text-gray-300">{artist}</p>
      </div>
    </div>
  );
};

export default Track;
