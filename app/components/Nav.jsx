var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <nav id="nav">
      <ul className="nav nav-pills nav-justified">
        <li role="presentation">
          <IndexLink to="/" activeClassName="active">코딩 SAM</IndexLink>
        </li>
        <li role="presentation">
          <Link to="scratch" activeClassName="active">Scratch starter</Link>
          </li>
        <li role="presentation">
          <Link to="web" activeClassName="active">Web master</Link>
          </li>
        <li role="presentation">
          <Link to="python" activeClassName="active">파이썬 explore</Link>
          </li>
        <li role="presentation">
          <Link to="shorttime" activeClassName="active">단기과정</Link>
          </li>
        <li role="presentation">
          <Link to="oneday" activeClassName="active">1Day Class</Link>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Nav;
