import React from 'react';

require('./CampInfo.css');

export default class CampInfo extends React.Component {
	constructor(props) {
		super(props);

    this.dateList = this.props.info.dates.map(function(date) {
      return (
        <li>
          <span className="camp-no">{date.no}</span>
          <span>
            <span className="camp-date">{date.startDate}</span>
            <span className="camp-day">{date.startDay}</span>
            <span className="camp-wave">~</span>
            <span className="camp-date">{date.endDate}</span>
            <span className="camp-day">{date.endDay}</span>
            <span className="camp-loc">{date.location}</span>
          </span>
        </li>
      );
    });
	}

	render() {
		return (
      <section id="camp-info">
        <div className="row">
          <div className="col-md-5">
            <p className="camp-title">{this.props.info.title}</p>
            <p className="camp-subtitle">{this.props.info.subtitle}</p>
          </div>
          <dl className="col-md-7 camp-info">
            <div className="row">
              <dt className="col-sm-2">대상</dt>
              <dd className="col-sm-10">{this.props.info.target}</dd>

              <dt className="col-sm-2">일정</dt>
              <dd className="col-sm-10">
                <ul className="list-unstyled">
                  {this.dateList}
                </ul>
              </dd>

              <dt className="col-sm-2">시간</dt>
              <dd className="col-sm-10">{this.props.info.time}</dd>

              <dt className="col-sm-2">장소</dt>
              <dd className="col-sm-10">
                <ul className="list-unstyled">
                  <li>
                    <span className="loc-name">[강남] <b>CMAX</b></span>
                    <span className="loc-addr">서울특별시 강남구 테헤란로로1길 28-11</span>
                  </li>
                  <li>
                    <span className="loc-name">[목동] <b>쉬라이크스커피</b></span>
                    <span className="loc-addr">서울특별시 양천구 목동 606-8</span>
                  </li>
                  <li>
                    <span className="loc-name">[송도] <b>연세대학교 진리관</b></span>
                    <span className="loc-addr">인천광역시 연수구 송도과학로 85</span>
                  </li>
                </ul>
              </dd>

              <dt className="col-sm-2">인원</dt>
              <dd className="col-sm-10">{this.props.info.persons}</dd>

              <dt className="col-sm-2">준비물</dt>
              <dd className="col-sm-10">{this.props.info.needed}</dd>

              <dt className="col-sm-2">참가비</dt>
              <dd className="col-sm-10">{this.props.info.price}</dd>

              <dt className="col-sm-2"><span className="highlight">결제방법</span></dt>
              <dd className="col-sm-10">
                <span>계좌 이체</span>
                <br />
                <span><b>하나은행 (주)테크브릿지지 771-910020-59704</b></span>
              </dd>

            </div>
          </dl>
        </div>
        <div className="row">
          <div className="col-xs-12 highlight text-center discount">
            <div className="col-md-1 title">
              <span>할인<br />혜택</span>
            </div>
            <div className="col-md-3">
              <img src="img/bird.png" className="img-responsive center-block" />
              <div>
                <span className="white circle">1</span>
                &nbsp;&nbsp;
                Early Bird(~7/24)<br /><b>320,000원</b>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/oneplus.png" className="img-responsive center-block" />
              <div>
                <span className="white circle">2</span>
                &nbsp;&nbsp;
                '소개해준 분, 소개받은 분 모두!'<br />1+1 할인가 <b>320,000원</b>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/20off.png" className="img-responsive center-block" />
              <div>
              <span className="white circle">3</span>
              &nbsp;&nbsp;
              Tech Camp 수료자 정규과정 할인<br />
              테크브릿지 정규과정 등록 시 첫달 <b>20% 할인!</b>
              </div>
            </div>
          </div>
        </div>
      </section>
		);
	}
}
