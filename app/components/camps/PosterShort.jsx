import React from 'react';

import CampInfoShort from './CampInfoShort.jsx';
import ApplyForm from './ApplyForm.jsx';

require('./PosterShort.css');

export default class PosterShort extends React.Component {
	constructor(props) {
		super(props);

    this.posters = this.props.posterData.map(function(poster) {
      <div>
        <CampInfoShort info={poster} />
        <ApplyForm />
        <hr />
      </div>
    })
	}

	render() {
		return (
      <div id="poster">
        {this.posters}
      </div>
    );
  }
}
