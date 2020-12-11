import { LOGIN } from './types';
import axios from 'axios';

export const getLogin = (email,password, toast) => async (dispatch) => {
    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
      email : "",
      password:"",
    };

  axios.post(`http://207.180.233.248/ikar_api/v1/login`,{email: email,
  password:password
  })

  .then(function (response) {
    console.log(response);
    if (
      response !== null &&
      response !== undefined
    ) {
      res = response.data;
    
    } else res = {};
    dispatch({
      type: LOGIN,
      payload: res,
    });
  })
  .catch(function (error) {
    if (error.response) {
      if (error.response.status == 422) {
        toast.error("Invalid email, please input a valid email address" , {position:"top-center"});
      }
      else if (error.response.status == 401) {
       toast.error("Wrong email or password, please try again" , {position:"top-center"});
      }
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
    dispatch({
      type: LOGIN,
      payload: res,
    });
  });
}
