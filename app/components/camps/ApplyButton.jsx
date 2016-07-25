import React from 'react';

import Button from '../Button.jsx'

require('./ApplyButton.css');

export default class ApplyButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <Button text="신청하기" link="http://goo.gl/forms/dl2jXLbToqvDGZJv2" />
		);
	}
}
