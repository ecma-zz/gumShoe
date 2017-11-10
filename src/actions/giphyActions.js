import request from 'superagent';

const APIURL = 'http://api.giphy.com/v1/gifs/search?q=trending&api_key=rhZhEqnU8Xun19VPVdHt8ySVTTdCwzK3';

export const fetchGifs = () => {
  return (dispatch) => {

    dispatch( isGifLoading(true) ); // immediate dispatch, loader

    return request.get(APIURL) // asynch task returns promise obj
      .then( response => { //also returns promise 
        if(!response.ok){
          throw Error(response.statusText);
        }

        dispatch( isGifLoading(false) );

        return response;

      })
      .then( response => { 

        dispatch( fetchGifSuccess( response.body ) );

      })
      .catch( error => {
        throw Error(error);
      })
  }
};
export const fetchGifSuccess = (gifs) => {
  return {
    type: 'FETCH_GIF_SUCCESS',
    gifs, // payload
  }
};
export const isGifLoading = (bool) => {
  return {
    type            : 'GIF_IS_LOADING',
    isGifLoading    : bool
  }
};
 

