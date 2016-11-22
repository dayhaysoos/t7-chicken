import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.getVisibilityFilter;
const getFrameData = (state) => (state.frameData);

const getVisibleData = createSelector(
	[getVisibilityFilter, getFrameData],
	(visibilityFilter, data) => {
		console.log(data.alisa, 'test');

		// switch (visibilityFilter) {
		// 	case 'SHOW_ALL':
		// 		return data
		// 	case 'SHOW_HIT_LEVEL':
		// 		return data.filter(d => d.hitLevel)
		// 	case 'SHOW_DAMAGE':
		// 		return data.filter(d => d.damage)
		// 	case 'SPEED':
		// 		return data.filter(d => d.speed)
		// 	case 'SHOW_ON_BLOCK':
		// 		return data.filter(d => d.onBlock)
		// 	case 'SHOW_ON_HIT':
		// 		return data.filter(d => d.onHit)
		// 	case 'SHOW_ON_CH':
		// 		return data.filter(d => d.onCH)
		// }
	})

export default getVisibleData;