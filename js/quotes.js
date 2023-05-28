const quotes = [
  {
    quote: "당신이 포기할 때, 나는 시작한다.",
    author: "일론 머스크",
  },
  {
    quote: "내일이란 오늘의 다른 이름일 뿐.",
    author: "윌리엄 포크너",
  },
  {
    quote: "준비하지 않은 자는 기회가 와도 소용없다.",
    author: "알렉시스 드 토크빌",
  },
  {
    quote: "꿈이 없다면 아무 일도 일어나지 않는다.",
    author: "칼 샌드버그",
  },
  {
    quote: "실패도 배우는 것이 있으면 성공이다.",
    author: "말콤 포브스",
  },
  {
    quote: "시간은 당신을 기다리지 않는다.",
    author: "짐멜",
  },
  {
    quote: "실수를 두려워말고 계속 도전하라.",
    author: "전 시몬즈",
  },
  {
    quote: "앞서 가는 방법의 비밀은 시작하는 것이다.",
    author: "마크 트웨인",
  },
  {
    quote: "성공은 영원하지 않으며, 실패 역시 그렇다.",
    author: "델 크로스워드",
  },
  {
    quote: "태만을 즐기고 있을 때는 태만함을 느끼지 못한다.",
    author: "가스가 센안",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
