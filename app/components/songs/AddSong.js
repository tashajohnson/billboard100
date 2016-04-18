import React from 'react';
import { connect } from 'react-redux';
import { addSong } from './actions';

let AddSong = ({ dispatch }) => {
  let input;
  return(
    <div>
      <input ref={ node => { input = node; }} />
      <button
        className="btn btn-large"
        onClick={ () => {
          dispatch(addSong(input.value));
          input.value = '';
      }}>
      Add
      </button>
    </div>
  )
}

AddSong = connect()(AddSong);

export default AddSong;