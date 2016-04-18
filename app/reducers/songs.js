const songs = (state = [], action) => {
  switch (action.type) {
    case 'GET_SONGS':
      return action.songs;
    case 'ADD_SONG':
      return [
        ...state,
        {
          _id: action._id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_SONG':
      return state.map( song => {
        if (song._id !== action._id)
          return song;
        return {
          ...song,
          completed: action.completed
        }
      })
    default:
      return state;
  }
}

export default songs;