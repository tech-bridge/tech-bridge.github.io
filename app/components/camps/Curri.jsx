import React from 'react';

require('./Curri.css');

export default class Curri extends React.Component {
	constructor(props) {
		super(props);

    this.days = this.props.curri.map(function(curri) {
      var contents = curri.contents.map(function(content) {
        return (
          <div>
            <div className="col-md-3 curri-title">
              {content.title}
            </div>
            <div className="col-md-9 curri-desc">
              {content.desc}
            </div>
          </div>
        );
      });

      return (
        <div className="row curri-row">
          <div className="col-md-2 curri-day">
            <span className="circle highlight">{curri.day}</span>
          </div>
          <div className="col-md-10">
            <div className="row curri-contents">
              {contents}
            </div>
          </div>
        </div>
      );
    });
	}

	render() {
		return (
      <section id="curri">
        {this.days}
      </section>
		);
	}
}
