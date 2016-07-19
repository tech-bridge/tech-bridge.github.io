import React from 'react';

import Poster from './Poster.jsx';

var samData = {
  info: {
    title: "코딩 SAM",
    subtitle: "Camp 1",
    target: "코딩을 처음 접하는 초등학교 1~6학년 친구들",
    dates: [
      {
        no: "1차",
        startDate: "8월1일",
        startDay: "월",
        endDate: "8월3일",
        endDay: "수",
        location: "강남"
      },
      {
        no: "2차",
        startDate: "8월8일",
        startDay: "월",
        endDate: "8월10일",
        endDay: "수",
        location: "강남/목동"
      },
      {
        no: "3차",
        startDate: "8월15일",
        startDay: "월",
        endDate: "8월17일",
        endDay: "수",
        location: "목동/송도"
      }
    ],
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    persons: "각 캠프 당 선착순 16명(소수 정예)",
    needed: "노트북",
    price: "360,000원",
  },
  eduinfo: {
    desc: "아이들에게 어려운 코드 타이핑 과정 없이도 컴퓨터적 사고 능력과 창의력을 기를 수 있습니다. 특히 SAM을 통해 앞으로 보편화될 IoT 기술을 활용하여 나만 열 수 있는 금고, 운전할 수 있는 자동차 등을 만들고 놀면서 자연스럽게 기술을 배울 수 있습니다.",
    image: "",
    youtube: "https://www.youtube.com/embed/43ps5GV_rJk"
  },
  curri: [
    {
      day: "Day 1",
      contents: [
        {
          title: "SAM 소개",
          desc: "소개, 설치, 사용하는 방법을 배웁니다."
        },
        {
          title: "나만의 만보계",
          desc: "SAM 의 장치와 센서를 활용하는 방법을 배웁니다."
        }
      ]
    },
    {
      day: "Day 2",
      contents: [
        {
          title: "훔쳐가지마 도둑아!",
          desc: "틸트 센서, 미디어 오브젝트 사용 방법을 배우고, 논리연산에 대해 배웁니다."
        },
        {
          title: "나만 열 수 있는 금고",
          desc: "논리연산에 대한 심화내용을 배웁니다."
        }
      ]
    },
    {
      day: "Day 3",
      contents: [
        {
          title: "레이싱 시합",
          desc: "모터와 서보 사용방법을 배웁니다."
        },
        {
          title: "자유 프로젝트",
          desc: "지금까지 배운 내용들을 활용하여 아이들 스스로 만들고 싶은 것을 만듭니다."
        }
      ]
    },
  ]
};
export default class Sam extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <Poster posterData={samData} />
		);
	}
}
