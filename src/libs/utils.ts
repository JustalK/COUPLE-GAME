import {
	NativeScrollSize,
	NativeScrollPoint
} from 'react-native';

/**
* Check is the user reach the bottom of the page and lock the status of the scroll down
* @params {NativeScrollSize} layoutMeasurement The size of the screen of the user
* @params {NativeScrollPoint} contentOffset The size of the offset of the user
* @params {NativeScrollSize} contentSize The size of the content
* @return {boolean} True if the user reach the bottom, false if else
**/
export const isGoingDown = function(layoutMeasurement: NativeScrollSize, contentOffset: NativeScrollPoint, contentSize: NativeScrollSize): boolean {
	if (this.state.loadMore && layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000) {
		this.setState({ loadMore: false });
		return true;
	}

	return false;
}
