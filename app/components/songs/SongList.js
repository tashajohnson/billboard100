import React from 'react';
import Song from './Song';

const SongList = ({ songs, onSongClick }) => (
  <div>
    {songs.map( song =>
      <Song
        key={song._id}
        {...song}
        onClick={ () => onSongClick(song._id) }
      />
   )}
 </div>
);

export default SongList;