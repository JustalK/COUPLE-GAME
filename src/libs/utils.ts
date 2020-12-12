import {
	NativeScrollSize,
	NativeScrollPoint
} from 'react-native';

export const isGoingDown = function(layoutMeasurement: NativeScrollSize, contentOffset: NativeScrollPoint, contentSize: NativeScrollSize): boolean {
	if (this.state.loadMore && layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000) {
		this.setState({ loadMore: false });
		return true;
	}

	return false;
}
