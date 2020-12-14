import { CITIES } from './types';
import axios from 'axios';

export const getCities = (visible,province, order) => async (dispatch) => {
    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
      visible : "",
      province:"",
      order:"",
     
    };


axios.post(`http://207.180.233.248/ikar_api/v1/properties/search?per_page=12&page=1`,{visible: visible,
province:province, order:order 
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
      type: CITIES,
      payload: res,
    });
  })
  .catch(function (error) {
    if (error.response) {
      if (error.response.status ==  404) {

      errorRes = {
        errorStatus: error.response.status,
        errorMessage: error.response,
      };
    }
    } else if (error.request) {
      errorRes = {
        errorMessage: error.request,
      };
    } else {
      errorRes = { errorMessage: error.message };
    }
    res = errorRes;
    dispatch({
      type: CITIES,
      payload: res,
    });

    
  });
}
