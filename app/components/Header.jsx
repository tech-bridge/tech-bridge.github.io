var React = require('react');

var Header = (props) => {
  return (
    <header>
      <div className="row">
        <div className="col-md-offset-5 col-md-6">
          <img src="img/tech_camp_logo.png" alt="" className="img-responsive" />
        </div>
        <div className="col-md-offset-1 col-md-10 header-content">
          <h2>
            배움은 즐거워야 한다!
          </h2>
          <p>
            아이들이 좋아하는 콘텐츠와 PBL(Project Base Learning) 수업이 만나 즐기면서도 체계적으로 배울 수 있습니다.
          </p>
          <br />
          <p>
            컴퓨터 프로그래밍은 어른들도 쉽게 배울 수 없는 분야입니다. 그렇기에 아이들에게 프로그래밍을 가르치기 위해 MIT 스크래치, SAM 키트 등 많은 언어와 도구들이 만들어졌고, 세계적으로 많이 쓰이고 있습니다. 하지만 도구만 좋다고 아이들이 잘 배울 수 있는 것은 아닙니다. 테크 캠프는 아이들이 좋아하고 빠져들 수 있는 콘텐츠를 통해 <strong>PBL(Project Base Learning)</strong> 방식으로 진행되어 아이들 스스로 즐기면서 자연스럽게 <strong>프로그래밍을 위한 논리적 사고력과 창의력</strong>을 기를 수 있습니다.
          </p>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
