import React from 'react';

require('./CampInfoShort.css');

export default class CampInfoShort extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <section id="camp-info">
        <div className="row">
          <div className="col-md-5 info-left">
            <p className="camp-title">{this.props.info.title}</p>
            <p className="camp-subtitle">{this.props.info.subtitle}</p>
            <p>{this.props.info.desc}</p>
          </div>
          <dl className="col-md-7 camp-info">
            <div className="row">
              <dt className="col-sm-2">대상</dt>
              <dd className="col-sm-10">{this.props.info.target} <b>{this.props.info.targetBold}</b></dd>

              <dt className="col-sm-2">기간</dt>
              <dd className="col-sm-10">6주 과정, 총 <b>12회</b> 수업</dd>

              <dt className="col-sm-2">일정</dt>
              <dd className="col-sm-10">8월 6일 <b>토</b> ~ 9월 11일 <b>일, 주 2회</b> 토/일</dd>

              <dt className="col-sm-2">시간</dt>
              <dd className="col-sm-10">{this.props.info.time}</dd>

              <dt className="col-sm-2">인원</dt>
              <dd className="col-sm-10">각 캠프 당 선착순 <b>{this.props.info.number}명</b> (소수 정예)</dd>

              <dt className="col-sm-2">준비물</dt>
              <dd className="col-sm-10">{this.props.info.needed}</dd>
            </div>
          </dl>
          <div className="col-xs-12">
            <div className="text-right q">"비용은 별도 문의해주시기 바랍니다."</div>
            <img src={this.props.info.image} className="img-responsive center-block i"/>
          </div>
        </div>
      </section>
		);
	}
}
