
export const giphyReducer = (state=[], action) => {
	console.log('%c action: ', 'background:beige', action);
	switch(action.type){

		case 'FETCH_GIF_SUCCESS':
			return action;

		default: 
			return state;
	}
}
export const isGifLoading = (state=[], action) => {
	switch(action.type){
		case 'BOOKS_IS_LOADING':
			return action.isBooksLoading;
			
		default:
			return state;
	}
}
