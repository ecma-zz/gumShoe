import { combineReducers } 				from 'redux';
import { giphyReducer, isGifLoading } 	from './giphyReducers';

export default combineReducers({
	gifs 			: giphyReducer,
	isGifLoading
})

//gets created as store, passed to Provider then connected - passed state as prop