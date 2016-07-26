import React from 'react';

import Poster from './Poster.jsx';

var data = {
  info: {
    title: "Scratch Starter",
    subtitle: "Camp 2",
    desc: "스크래치는 MIT 미디어 연구소에서 만든 어린이 교육용 프로그래밍 언어입니다. 일반적인 프로그래밍 언어에서 프로그램을 만들려면 아이들이 직접 일일이 코드를 타이핑해야 하지만, 스크래치에서는 명령이 블록으로 만들어져 있어서 마우스를 이용하여 쉽게 프로그램을 만들 수 있습니다. 특히 게임이나 애니메이션과 같은 것을 쉽게 만들 수 있도록 고안되어 있기 때문에 어렵지 않게 프로그래밍 기법들을 익힐 수 있습니다.",
    target: "코딩을 처음 접하는 초등학교 1~6학년 친구들",
    dates: [
      {
        no: "1차",
        startDate: "8월1일",
        startDay: "월",
        endDate: "8월3일",
        endDay: "수",
        location: "강남",
        isClose: true
      },
      {
        no: "2차",
        startDate: "8월8일",
        startDay: "월",
        endDate: "8월10일",
        endDay: "수",
        location: "강남/목동/송도",
        isClose: false
      },
      {
        no: "3차",
        startDate: "8월15일",
        startDay: "월",
        endDate: "8월17일",
        endDay: "수",
        location: "강남/목동/송도",
        isClose: false
      }
    ],
    time: "오전 10:00 ~ 오후 1:00(3시간)",
    number: 16,
    needed: "노트북",
    price: "360,000원",
  },
  eduinfo: {
    desc: "연주하고 노래하는 밴드 만들기, 우주선 조종하기, 대화하는 로봇 만들기 등 아이들이 흥미를 가지고 열성적으로 참여할 수 있는 콘텐츠를 통해 전반적인 프로그래밍 기법을 배우고 논리적 사고력과 창의력을 기릅니다.",
    image: "",
    youtube: "",
    vimeo: "https://player.vimeo.com/video/65583694"
  },
  curri: [
    {
      day: "Day 1",
      contents: [
        {
          title: "스크래치 소개",
          desc: "스크래치를 소개하고, 수업 준비를 하며 친해집니다."
        },
        {
          title: "노래하고 연주하는 밴드 만들기",
          desc: "프로젝트에 음악을 넣고, 모양과 배경을 변경하는 방법과 코드 블록으로 프로그램 하는 방법을 배웁니다."
        }
      ]
    },
    {
      day: "Day 2",
      contents: [
        {
          title: "우주선 조종하기",
          desc: "코드 블록을 합쳐 간단한 애니메이션을 만드는 방법을 배우고, 반복하기(루프)에 대해 배웁니다."
        },
        {
          title: "유령 잡기 게임",
          desc: "변수를 배우고 프로그램의 데이터를 저장하는 방법을 배웁니다."
        }
      ]
    },
    {
      day: "Day 3",
      contents: [
        {
          title: "대화하는 로봇",
          desc: "프로젝트에 텍스트를 넣는 방법을 배우고, 조건문에 대해 새롭게 배웁니다."
        },
        {
          title: "나만의 그림판",
          desc: "스프라이트 사이에서 정보(메시지)를 방송(브로드캐스트)하는 방법을 배웁니다."
        }
      ]
    },
    {
      day: "Day 4",
      contents: [
        {
          title: "보트 레이싱",
          desc: "배경을 관찰하는 방법을 배웁니다."
        },
        {
          title: "자유 프로젝트",
          desc: "지금까지 배운 내용들을 활용하여 아이들 스스로 만들고 싶은 프로그램을 만듭니다."
        }
      ]
    },
  ]
};

export default class Scratch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <Poster posterData={data} />
		);
	}
}
