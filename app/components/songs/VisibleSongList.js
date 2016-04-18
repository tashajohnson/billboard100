import React from 'react';
import { connect } from 'react-redux';
import { toggleSong, getVisible } from './actions';
import SongList from './SongList';

const mapStateToProps = (state) => {
  return {
    songs: getVisible(state.songs, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSongClick: (id) => {
      dispatch(toggleSong(id));
    }
  }
};

const VisibleSongList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)

export default VisibleSongList;