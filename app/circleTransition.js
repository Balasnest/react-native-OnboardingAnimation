import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TouchableWithoutFeedback, Animated, Easing, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default class CircleTransition extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			scale: new Animated.Value(0),
			color: '#ccc'
		};
	}

	start(color, callback){
		this.setState({
			color: color
		},() => {
			this.animate(callback);
		})
	}

	animate(callback) {
		Animated.timing(this.state.scale, {
			toValue: 4,
			duration: this.props.duration,
			easing: this.props.easing
		}).start(() => {
			callback();
			this.setState({
				scale: new Animated.Value(0)
			});
		});
	}

	getLeftPosition() {
		const halfSize = this.props.size/2;
		const halfWidth = width/2;
		let marginHorizontalTopLeft = -halfSize;

		return marginHorizontalTopLeft + halfWidth;
	}

	getTopPosition(){
		const halfSize = this.props.size/2;
		let marginVerticalTopLeft = -halfSize;
		console.log(`Left Position: ${height}`)
		return marginVerticalTopLeft + height;
	}

	render(){
		const { scale, color } = this.state;
		const { size } = this.props;
		console.log(`Size ${size}`);
		let leftPosition = this.getLeftPosition();
		let topPosition = this.getTopPosition();
		return(
			<Animated.View style={{
				position: 'absolute',
				top: topPosition,
				left: leftPosition,
				backgroundColor: color,
				width: size,
				height: size,
				borderRadius: size / 2,
				transform:[{
					scale: scale
				}]
			}} />
		);
	}
}

CircleTransition.propsTypes = {
	size: PropTypes.number,
	duration: PropTypes.number,
	easing: PropTypes.func,
}

CircleTransition.defaultProps = {
	size: Math.min(width, height) - 1,
	duration: 400,
	easing: Easing.linear
}

