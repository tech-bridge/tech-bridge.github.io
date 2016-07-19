import React from 'react';

import ApplyForm from './ApplyForm.jsx';

require('./PosterImage.css');

export default class PosterImage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="poster">
        <img src={this.props.posterData.image} className="img-responsive center-block" />
        <ApplyForm />
      </div>
    );
  }
}
