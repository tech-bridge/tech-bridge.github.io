import React from 'react';

import PosterShort from './PosterShort.jsx';

var data = [
  {
    title: "Web Dev",
    subtitle: "단기과정 1",
    target: "나만의 웹사이트를 만들고 싶은",
    targetBold: "중1 이상 학생들",
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    number: 8,
    needed: "노트북",
    image: "img/web_short.png"
  },
  {
    title: "파이썬",
    subtitle: "단기과정 2",
    target: "파이썬을 마스터하고 싶은 초6 ~ 중2",
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    number: 8,
    needed: "노트북",
    image: "img/python_short.png"
  },
];

export default class Shorttime extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <PosterShort posterData={data} />
		);
	}
}
