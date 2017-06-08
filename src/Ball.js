import React, { Component } from 'react';
import { View, Animated } from 'react-native';


class Ball extends React.Component {

	componentWillMount() {
		this.position = new Animated.ValueXY(0, 0);
		Animated.spring(this.position, {
			toValue: { x: 200, y: 500 }
		}).start();
	}

	render() {
		return (
			<Animated.View style={ this.position.getLayout() }>
				<View style={styles.ball} />
			</Animated.View>
		);
	}
}

const styles = {
	ball: {
		borderWidth: 40,
		borderRadius: 40,
		width: 80,
		height: 80,
		borderColor: '#00acc1',
	}
}

export default Ball;