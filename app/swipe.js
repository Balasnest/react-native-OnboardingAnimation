import React from 'react';
import {Animated, PanResponder} from 'react-native';
import PropTypes from 'prop-types';

const swipeDirections = {
	SWIPE_LEFT: 'SWIPE_LEFT',
	SWIPE_RIGHT: 'SWIPE_RIGHT'
};

function isValidSwipe(velocity, velocityThreshold, directionalOffset, directionalOffsetThreshold) {
  return Math.abs(velocity) >= velocityThreshold && 
  Math.abs(directionalOffset) < directionalOffsetThreshold;
}

export default class Swipe extends React.Component {

	constructor(props){
		super(props);
		this.swipeConfig = {
			velocityThreshold: 0.3,
			directionalOffsetThreshold: 80
		};
	}
	
	componentWillMount(){
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderRelease: (evt, gestureState) => {
				const swipeDirection = this._getSwipeDirection(gestureState);
				console.log(swipeDirection);
				this._triggerSwipeHandlers(swipeDirection, gestureState);
			}
		});
	}

	_triggerSwipeHandlers(swipeDirection, gestureState) {
	  const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
	  switch (swipeDirection) {
	    case SWIPE_LEFT:
	      this.props.onSwipeLeft(gestureState);
	      break;
	    case SWIPE_RIGHT:
	      this.props.onSwipeRight(gestureState);
	      break;
	  }
	}

	_getSwipeDirection(gestureState) {
	  const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
	  const {dx, dy} = gestureState;
	  if (this._isValidHorizontalSwipe(gestureState)) {
	    return (dx > 0) ? SWIPE_RIGHT : SWIPE_LEFT;
	  }
	}

	_isValidHorizontalSwipe(gestureState) {
	  const {vx, dy} = gestureState;
	  const {velocityThreshold, directionalOffsetThreshold} = this.swipeConfig;
	  return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
	}

	render(){
		return(
			<Animated.View style={this.props.style}
				{...this.panResponder.panHandlers}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}


Swipe.propTypes = {
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
}

Swipe.defaultProps = {
  onSwipeLeft: () => {},
  onSwipeRight: () => {}
}