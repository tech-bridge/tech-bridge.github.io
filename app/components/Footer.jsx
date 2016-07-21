var React = require('react');

var Header = (props) => {
  return (
    <footer>
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <img src="img/tech_logo.png" alt="" className="img-responsive footer-logo" />
                </div>
              </div>
              <p>
                초등학생에게 최적화된 코딩교육을 제공하고자 하는 목표로 설립된 교육 기관으로, PBL(Project Based Learning)을 기반으로 자신의 생각을 실현하는 놀이터입니다.
              </p>
            </div>
            <div className="col-md-offset-1 col-md-5">
              <div className="company-info">
                <span>
                  <img src="img/pin.png" alt="" className="img-responsive icon" />
                  서울특별시 마포구 월드컵북로4길77
                </span>
                <span>
                  <img src="img/phone.png" alt="" className="img-responsive icon" />
                  070 - 4792 - 5111 (01040908512)
                </span>
                <span>
                  <img src="img/mail.png" alt="" className="img-responsive icon" />
                  contact@techbridge.co.kr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

module.exports = Header;
