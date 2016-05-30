import React from 'react';

export default class FrameData extends React.Component{
	render() {

		function requireAll(requireContext) {
			return requireContext.keys().map(requireContext);
		}

		var data = requireAll(require.context('../data/t7', false, /\.json$/));
		console.log(data[0]);

		return <h2 id="test">Frame Data</h2>
	}
 }