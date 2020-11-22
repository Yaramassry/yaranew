import { LOGIN } from '../actions/types';
const initialState = {
  
        id: "",
        name: "",
        email: "",
        agency_admin: "",
        ikar_admin: "",
        agency_ref_id:"",
        blocked:"",
        confirmed: "",
        token: "",
    
    login:false,
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
          };
        } else {
          return {
            id: null,
            name:  null,
            email:  null,
            agency_admin: null,
            ikar_admin:  null,
            agency_ref_id:  null,
            blocked: null,
            confirmed:  null,
            token:  null,
            login:false,
            requestFailedMessage: action.payload,
          };
        }
  
      default:
        return state;
    }
  }