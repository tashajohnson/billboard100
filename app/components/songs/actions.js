import $ from 'jquery';

export const fetchSongs = () => {
  return (dispatch) => {
    $.ajax({
      url: '/songs',
      type: 'GET'
    }).done( result => {
      dispatch(getSongs(result));
    });
  }
}

export const addSong = (text) => {
  return (dispatch) => {
    $.ajax({
      url: '/songs',
      type: 'POST',
      data: { text: text, completed: false }
    }).done( result => {
      dispatch(song('ADD_SONG', result));
    });
  }
}

export const toggleSong = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/songs/${id}`,
      type: 'PUT'
    }).done( result => {
      dispatch(song('TOGGLE_SONG', result))
    });
  }
}

export const getVisible = (songs, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return songs;
    case 'SHOW_COMPLETED':
      return songs.filter( t => t.completed );
    case 'SHOW_ACTIVE':
      return songs.filter( t => !t.completed );
  }
}

const song = (type, item) => {
  return {
    type: type,
    text: item.text,
    completed: item.completed,
    _id: item._id
  }
}



const getSongs = (songs) => {
  return {
    type: 'GET_SONGS',
    songs
  }
}

