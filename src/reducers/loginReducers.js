import { LOGIN } from '../actions/types';
const initialState = {
        user: {},
        login: false
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        if (
          Object.keys(action.payload).length > 0 &&
          (action.payload.errorMessage === '' ||
            action.payload.errorMessage === undefined)
        ) {
          return {
            user: {
              id: action.payload.id,
              name: action.payload.name,
              email: action.payload.email,
              agency_admin: action.payload.agency_admin,
              ikar_admin: action.payload.ikar_admin,
              agency_ref_id:action.payload.agency_ref_id,
              blocked:action.payload.blocked,
              confirmed: action.payload.confirmed,
              token: action.payload.token,
              requestFailedMessage: { error: 'no' },
            },
            login: true
          };
        } else {
          return {
            user: state.user,
            login: false
          };
        }

      default:
        return state;
    }
  }
