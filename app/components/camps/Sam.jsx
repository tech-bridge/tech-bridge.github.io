var React = require('react');

var Sam = (props) => {
  return (
    <section>
      <div className="row">
        <div className="col-md-5">
          <p className="camp-title">코딩 SAM</p>
          <p className="camp-subtitle">Camp 1</p>
        </div>
        <dl className="col-md-7 camp-info">
          <div className="row">
            <dt className="col-sm-2">대상</dt>
            <dd className="col-sm-10">코딩을 처음 접하는 초등학교 1~6학년 친구들</dd>

            <dt className="col-sm-2">일정</dt>
            <dd className="col-sm-10">
              <ul className="list-unstyled">
                <li>
                  <span className="camp-no">1차</span>
                  <span>
                    <span className="camp-date">8월1일</span>
                    <span className="camp-day">월</span>
                    <span className="camp-wave">~</span>
                    <span className="camp-date">8월3일</span>
                    <span className="camp-day">수</span>
                    <span className="camp-loc">강남</span>
                  </span>
                </li>
                <li>
                  <span className="camp-no">2차</span>
                  <span>
                    <span className="camp-date">8월8일</span>
                    <span className="camp-day">월</span>
                    <span className="camp-wave">~</span>
                    <span className="camp-date">8월10일</span>
                    <span className="camp-day">수</span>
                    <span className="camp-loc">강남/목동</span>
                  </span>
                </li>
                <li>
                  <span className="camp-no">3차</span>
                  <span>
                    <span className="camp-date">8월15일</span>
                    <span className="camp-day">월</span>
                    <span className="camp-wave">~</span>
                    <span className="camp-date">8월17일</span>
                    <span className="camp-day">수</span>
                    <span className="camp-loc">목동/송도</span>
                  </span>
                </li>
              </ul>
            </dd>

            <dt className="col-sm-2">시간</dt>
            <dd className="col-sm-10">오전 10:00 ~ 오후후 1:00(3시간)</dd>

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
            <dd className="col-sm-10">각 캠프 당 선착순 16명(소수 정예)</dd>

            <dt className="col-sm-2">준비물</dt>
            <dd className="col-sm-10">노트북</dd>

            <dt className="col-sm-2">참가비</dt>
            <dd className="col-sm-10">360,000원</dd>

            <dt className="col-sm-2"><span className="highlight">결제방법</span></dt>
            <dd className="col-sm-10">계좌 이체, <b>하나은행 (주)테크브릿지지 771-910020-59704</b></dd>

          </div>
        </dl>
      </div>
      <div className="row">
        <div className="col-xs-12 highlight text-center discount">
          <div className="col-sm-1">
            <span className="title">할인<br />혜택</span>
          </div>
          <div className="col-sm-3">
            <img src="img/bird.png" className="img-responsive center-block" />
            <div className="row">
              <span className="white circle col-xs-2">1</span>
              <span className="col-xs-10">
                Early Bird(~7/24)<br /><b>320,000원</b>
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <img src="img/oneplus.png" className="img-responsive center-block" />
            <div className="row">
              <span className="white circle col-xs-2">2</span>
              <span className="col-xs-10">
                '소개해준 분, 소개받은 분 모두!'<br />1+1 할인가 <b>320,000원</b>
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <img src="img/20off.png" className="img-responsive center-block" />
            <div className="row">
              <span className="white circle col-xs-2">3</span>
              <span className="col-xs-10">
                Tech Camp 수료자 정규과정 할인
              </span>
              <span className="col-xs-12">
                테크크브릿지 정규과정 등록 시 첫달 <b>20% 할인!</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

module.exports = Sam;
