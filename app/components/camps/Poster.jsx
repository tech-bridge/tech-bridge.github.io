import React from 'react';

import CampInfo from './CampInfo.jsx';
import Eduinfo from './Eduinfo.jsx';
import Curri from './Curri.jsx';

require('./Poster.css');

export default class Poster extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="poster">
        <CampInfo info={this.props.posterData.info} />
        <hr />
        <Eduinfo eduinfo={this.props.posterData.eduinfo}/>
        <hr />
        <Curri curri={this.props.posterData.curri} />
      </div>
    );
  }
}
