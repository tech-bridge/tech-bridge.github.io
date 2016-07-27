import React from 'react';

require('./Button.css');

export default class Button extends React.Component {
	constructor(props) {
		super(props);

    this.handleClick = this.handleClick.bind(this);
	}

  handleClick() {
    window.open(this.props.link);
  }

	render() {
		return (
      <button type="button" className="btn btn-primary btn-lg outline apply" onClick={this.handleClick}>{this.props.text}</button>
		);
	}
}
