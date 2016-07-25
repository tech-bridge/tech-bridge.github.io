import React from 'react';

import CampInfoShort from './CampInfoShort.jsx';
import ApplyForm from './ApplyForm.jsx';

require('./PosterShort.css');

export default class PosterShort extends React.Component {
	constructor(props) {
		super(props);

    // this.posters = props.posterData.map(function(poster) {
    //   return (
    //     <div>
    //       <CampInfoShort info={poster} />
    //       <ApplyForm />
    //       <hr />
    //     </div>
    //   );
    // });
	}

	render() {
		return (
      <div id="poster">
        <CampInfoShort info={this.props.posterData[0]} />
        <ApplyForm />
        <hr />
        <CampInfoShort info={this.props.posterData[1]} />
        <ApplyForm />
      </div>
    );
  }
}
