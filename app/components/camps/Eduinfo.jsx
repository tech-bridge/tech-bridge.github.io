import React from 'react';

require('./Eduinfo.css');

export default class Eduinfo extends React.Component {
	constructor(props) {
		super(props);

    if (props.eduinfo.image.length > 0) {
      this.post = (
        <div className="col-md-6 youtube-wrapper">
          <img src={props.eduinfo.image} className="img-responsive center-block"/>
        </div>
      );
    } else if (props.eduinfo.youtube.length > 0) {
      this.post = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={props.eduinfo.youtube} frameborder="0" allowfullscreen className="center-block"></iframe>
        </div>
      );
    } else {
      this.post = (
        <div className="col-md-6 youtube-wrapper">
          <iframe src={props.eduinfo.vimeo} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      );
    }
	}

	render() {
		return (
      <section id="eduinfo">
        <div className="row">
          <div className="col-md-6">
            <p className="eduinfo-title">
              교육내용
            </p>
            <p>
              {this.props.eduinfo.desc}
            </p>
          </div>
          {this.post}
        </div>
      </section>
		);
	}
}
