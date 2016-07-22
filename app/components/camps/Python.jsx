import React from 'react';

import Poster from './Poster.jsx';

var data = {
  info: {
    title: "파이썬 Explore",
    subtitle: "Camp 4",
    desc: "파이썬은 아주 인기있는 프로그래밍 언어로, 파이썬을 이용하면 웹사이트, 게임, 과학용 소프트웨어, 그래픽 소프트웨어 등을 만들 수 있습니다. 그리고 같은 역할을 하는 다른 언어들에 비해 훨씬 쉽고 간결하여 처음 프로그래밍을 접하는 아이들이 배우기 좋은 언어이기도 합니다.",
    target: "초등학교 6학년 ~ 중학교 2학년 친구들",
    dates: [
      {
        no: "1차",
        startDate: "8월1일",
        startDay: "월",
        endDate: "8월4일",
        endDay: "목",
        location: "강남"
      },
      {
        no: "2차",
        startDate: "8월8일",
        startDay: "월",
        endDate: "8월11일",
        endDay: "목",
        location: "강남/목동/송도"
      },
      {
        no: "3차",
        startDate: "8월15일",
        startDay: "월",
        endDate: "8월18일",
        endDay: "목",
        location: "강남/목동/송도"
      }
    ],
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    number: 16,
    needed: "노트북",
    price: "360,000원",
  },
  eduinfo: {
    desc: "수수께끼 만들고 서로 풀어보기, 숫자 맞추기 게임 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 파이썬 언어를 배우고 프로그래밍 기법을 배워 웹, 게임을 비롯한 어떤한 프로그램도 만들 수 있는 기본 소양을 갖출 수 있습니다.",
    image: "img/sample2.png",
    youtube: "",
    vimeo: ""
  },
  curri: [
    {
      day: "Day 1",
      contents: [
        {
          title: "파이썬 소개",
          desc: "파이썬을 소개하고, 수업 준비를 하며 친해집니다."
        },
        {
          title: "텍스트 아트",
          desc: "파이썬 프로그램 사용법을 배워 텍스트를 스크린에 프린트 하는 방법을 배웁니다."
        }
      ]
    },
    {
      day: "Day 2",
      contents: [
        {
          title: "미래의 나",
          desc: "변수를 사용하여 계산하는 방법을 배우고, 이를 통해 미래의 내가 몇 살이 되는지 알려주는 프로그램을 만듭니다."
        },
        {
          title: "수수께끼",
          desc: "조건문을 배우고, 이를 통해 수수께끼를 만들어 친구들끼리 풀어봅니다."
        }
      ]
    },
    {
      day: "Day 3",
      contents: [
        {
          title: "거북이의 그림 그리기",
          desc: "'for' 반복문을 배웁니다. 파이썬의 Turtle(거북이) 모듈을 사용하여 그림을 그려보고, 반복문을 사용하여 더 효율적으로 그려 봅니다."
        },
        {
          title: "숫자 맞추기 게임",
          desc: "'while' 반복문을 배웁니다. 또한 난수를 만드는 방법을 배워 숫자 맞추기 게임을 만듭니다."
        }
      ]
    },
    {
      day: "Day 4",
      contents: [
        {
          title: "칭찬 로봇",
          desc: "리스트에 대해 배우고, 이를 통해 리스트에서 무작위로 칭찬을 선택하는 로봇을 만듭니다."
        },
        {
          title: "자유 프로젝트",
          desc: "지금까지 배운 내용들을 활용하여 아이들 스스로 만들고 싶은 프로그램을 만듭니다."
        }
      ]
    },
  ]
};

export default class Python extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <Poster posterData={data} />
		);
	}
}
