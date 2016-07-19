import React from 'react';

import PosterImage from './PosterImage.jsx';

var data = {
  image: "img/onedaysam.png"
}

export default class Oneday extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <PosterImage posterData={data} />
		);
	}
}
