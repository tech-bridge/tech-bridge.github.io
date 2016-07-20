import React from 'react';

import Poster from './Poster.jsx';

var data = {
  info: {
    title: "Web Master",
    subtitle: "Camp 3",
    desc: "웹은 컴퓨팅 분야에서 굉장히 중요한 위치에 있습니다. 특히 최근에는 웹이 모바일이나 데스크탑 에플리케이션 개발에서 사용되고 있기 때문에 가장 주목 받고 있는 분야이기도 합니다. 그런 웹의 최소 단위인 웹 페이지를 만드는 언어가 바로 HTML과 CSS입니다. HTML은 웹페이지의 구조를 만드는 언어이고, CSS는 HTML을 보기 좋게 디자인하는 역할을 하는 언어입니다. HTML이 웹페이지의 '뼈'라면 CSS는 '살'이라고 할 수 있습니다. 즉, HTML과 CSS를 배우면 자신이 표현하고 싶은 정보를 보기 좋게 웹 페이지 형태로 만들어 낼 수 있습니다.",
    target: "코딩을 처음 접하는 초등학교 4~6학년 친구들",
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
        location: "목동/송도"
      }
    ],
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    number: 16,
    needed: "노트북",
    price: "360,000원",
  },
  eduinfo: {
    desc: "생일 축하 카드 만들기, 로봇 조립하기 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 HTML과 CSS를 배워 스스로 멋진 웹 페이지를 만들 수 있습니다.",
    image: "img/sample1.png",
    youtube: "",
    vimeo: ""
  },
  curri: [
    {
      day: "Day 1",
      contents: [
        {
          title: "웹 소개",
          desc: "웹을 소개하고, 수업 준비를 하며 친해집니다."
        },
        {
          title: "생일 축하 카드",
          desc: "HTML 태그와 CSS 속성에 대해 배웁니다."
        }
      ]
    },
    {
      day: "Day 2",
      contents: [
        {
          title: "이야기 만들기",
          desc: "직접 HTML을 작성하여 만화책을 만듭니다."
        },
        {
          title: "로봇을 찾습니다!",
          desc: "직접 CSS를 작성하여 포스터를 만듭니다."
        }
      ]
    },
    {
      day: "Day 3",
      contents: [
        {
          title: "나만의 레시피",
          desc: "HTML 리스트와 CSS 색깔에 대해 배워 자신만의 레시피 페이지를 만듭니다."
        },
        {
          title: "수수꼐끼 만들기",
          desc: "CSS class 에 대해 배워 글씨와 배경을 자유롭게 꾸밉니다."
        }
      ]
    },
    {
      day: "Day 4",
      contents: [
        {
          title: "포트폴리오 만들기",
          desc: "HTML 하이퍼링크에 대해 배워 지금까지 만든 프로젝트들을 연결합니다."
        },
        {
          title: "자유 프로젝트",
          desc: "지금까지 배운 내용들을 활용하여 아이들 스스로 만들고 싶은 웹 페이지를 만듭니다."
        }
      ]
    },
  ]
};

export default class Web extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <Poster posterData={data} />
		);
	}
}
