import React from 'react';

import ApplyButton from './ApplyButton.jsx';

require('./ApplyForm.css');

export default class ApplyForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <form id="apply">
        <ApplyButton>신청하기</ApplyButton>
      </form>
		);
	}
}
