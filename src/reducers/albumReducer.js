import { GET_ALBUMS } from '../actions/types';

const initialState = {
  albums: []
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
          requestFailedMessage: { error: 'no' }
        };
      } else {
        return {
          albums: [],
          requestFailedMessage: action.payload
        };
      }

    default:
      return state;
  }
}
