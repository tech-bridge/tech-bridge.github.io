import React from 'react';

require('./BriefingBox.css')

export default class BriefingBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div className="briefing-box">
        캠프 설명회 신청 <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9-Vq-gSwu-VYh5G0urvx9Z-6fBr-cbpUZaRoJJQ4zPDhMMg/viewform" target="_blank">바로가기</a>
      </div>
		);
	}
}
