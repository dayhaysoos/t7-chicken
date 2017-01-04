import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.getVisibilityFilter;
const getFrameData = (state) => (state.frameData);

const getVisibleData = createSelector(
	[getVisibilityFilter, getFrameData],
	(visibilityFilter, data) => {
		console.log(data, state, 'testing some ish');
	})

export default getVisibleData;
