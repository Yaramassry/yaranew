import { CITIES } from '../actions/types';
const initialState = {
   
    properties:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
      case CITIES:
        if (
          Object.keys(action.payload).length > 0 &&
          (action.payload.errorMessage === '' ||
            action.payload.errorMessage === undefined)
        ) {
          return { 
            properties:action.payload,
           
          };
        } else {
          return {
            properties:[],
       };
        }

      default:
        return state;
    }
  }
