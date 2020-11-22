import { LOGIN } from './types';
import axios from 'axios';

export const getLogin = (dddd,asasds) => async (dispatch) => {
    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
    };
    
  await axios
  .post(`http://207.180.233.248/v1/login`,{email: dddd,
  password:asasds
  })

  .then(function (response) {
    console.log(response);
    if (
      response !== null &&
      response !== undefined &&
      Object.keys(response).length > 0
    ) {
      res = response.data;
    } else res = {};
  })
  .catch(function (error) {
    if (error.response) {
      errorRes = {
        errorStatus: error.response.status,
        errorMessage: error.response,
      };
    } else if (error.request) {
      errorRes = {
        errorMessage: error.request,
      };
    } else {
      errorRes = { errorMessage: error.message };
    }
    res = errorRes;
  });
  
  dispatch({
    type: LOGIN,
    payload: res,
  });
}