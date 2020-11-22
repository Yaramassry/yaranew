import { GET_ALBUMS } from './types';
import axios from 'axios';

export const getAlbums = () => async (dispatch) => {
  let res = {};
  let errorRes = {
    errorStatus: '',
    errorMessage: '',
  };
  await axios
    .get(`https://jsonplaceholder.typicode.com/photos/`)

    .then(function (response) {
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
    type: GET_ALBUMS,
    payload: res,
  });
};
