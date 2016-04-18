import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSong from '../components/songs/AddSong';
import VisibleSongList from '../components/songs/VisibleSongList';
import { fetchSongs } from '../components/songs/actions';
import $ from 'jquery';

class SongApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchSongs());
  }

  render() {
    return(
      <div className='container'>
        <AddSong />
        <VisibleSongList />
      </div>
    )
  }
}

export default connect()(SongApp);