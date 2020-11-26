import { GET_ALBUMS } from '../actions/types';

const initialState = {
  albums: [],
  user: {},
  login: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      if (
        Object.keys(action.payload).length > 0 &&
        (action.payload.errorMessage === '' ||
          action.payload.errorMessage === undefined)
      ) {
        return {
          albums: action.payload,
          requestFailedMessage: { error: 'no' },
          user: state.user,
          login: state.login
        };
      } else {
        return {
          albums: [],
          requestFailedMessage: action.payload,
          user: state.user,
          login: state.login
        };
      }

    default:
      return state;
  }
}
