import React, { Component } from 'react';
import * as giphyActions  	from '..//actions/giphyActions';
import { connect } 			from 'react-redux';


class GiphyContainer extends Component{
	componentDidMount(){
		console.log('PROPS: ------------------> ', this.props);
		this.props.fetchGifs();
	}
	render(){
		return <h1>GIPHY</h1>
	}
}

const mapStateToProps = (state) => {
	return {
		state
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		fetchGifs: () => dispatch( giphyActions.fetchGifs() )
	}
}

export default connect(mapStateToProps, mapDispatchProps)(GiphyContainer);