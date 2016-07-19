import React from 'react';

require('./ApplyButton.css');

export default class ApplyButton extends React.Component {
	constructor(props) {
		super(props);

    this.handleClick = this.handleClick.bind(this);
	}

  handleClick() {
    window.open("http://goo.gl/forms/dl2jXLbToqvDGZJv2");
  }

	render() {
		return (
      <button type="button" className="btn btn-primary btn-lg outline apply" onClick={this.handleClick}>신청하기</button>
		);
	}
}
