import React, { Component } from 'react';
import {
	View,
	Animated,
	PanResponder,
	Dimensions,
} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_THREESHOLD = 0.25 * SCREEN_WIDTH;

class Deck extends Component {
	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx, y: gesture.dy });
			},
			onPanResponderRelease: (events, gesture) => {
				if (gesture.dx > SCREEN_THREESHOLD) {
					console.log('SWIPE TO RIGHT');
				} else if (gesture.dx < -SCREEN_THREESHOLD) {
					console.log('SWIPE TO LEFT');
				} else {
					
				}
				this.resetPosition();
			},
		});

		this.state = { panResponder, position };
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	getCardStyle() {

		const { position } = this.state;
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg'],
		});

		return {
			...position.getLayout(),
			transform: [{ rotate }]
		}
	}

	renderCards() {
		return this.props.data.map((card, index) => {
			if (index === 0) {
				return (
					<Animated.View
						key={index}
						style={ this.getCardStyle() }
						{...this.state.panResponder.panHandlers}
					>
						{this.props.renderCard(card)}
					</Animated.View>
				);
			}
		});
	}

	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		);
	}
}

export default Deck;