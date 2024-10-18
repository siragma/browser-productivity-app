const quotes = [
    {
        quote: "네가 무언가를 믿을 때, 온 힘을 다해, 무조건적으로 그리고 여지없이 그것을 믿어라",
        author: "월트 디즈니",
    },
    {
        quote: "누구든지 원하는 것을 이룰 수 있어",
        author: "주토피아",
    },
    {
        quote: "두고 간 것에 집착한다면, 앞에 놓인 것을 절대 볼 수 없을 것이다.",
        author: "두고 간 것에 집착한다면, 앞에 놓인 것을 절대 볼 수 없을 것이다.",
    },
    {
        quote: "너는 매일 행복할 수 없다. 하지만 행복한 것들이 매일 존재한다.",
        author: "곰돌이 푸",
    },
    {
        quote: "압박, 도전과 같은 부정적인 모든 것들은 저에게 있어서 반등할 기회를 줍니다.",
        author: "코비 브라이언트",
    },
    {
        quote: "독창적이고자 노력하지 마라, 좋기만 하면 된다.",
        author: "폴 랜드",
    },
    {
        quote: "성공의 비결은 자신을 잃지 않는 것이다.",
        author: "마릴린 먼로",
    },
    {
        quote: "자신의 삶을 살아가는 것이 가장 중요한 일이다.",
        author: "루키우스 안나이우스 세네카",
    },
    {
        quote: "우리의 인생은 우리의 마음이 만든다.",
        author: "마더 테레사",
    },
    {
        quote: "어떤 일을 하는데 즐거움을 느끼면 그 일은 일이 아니라 즐거움이다.",
        author: "마크 트웨인",
    },
    {
        quote: "우리는 우리가 가진 문제를 해결할 능력을 가지고 있다.",
        author: "헬렌 켈러",
    },
    {
        quote: "현재 순간을 즐기면, 인생은 더욱 아름다워진다.",
        author: "랄프 넬슨 엘리엇",
    },
    {
        quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;