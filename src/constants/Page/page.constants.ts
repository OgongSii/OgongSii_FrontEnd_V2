interface Type {
  name: string;
  link: string;
}

export const PageLink : Type[] = [
  {
    name: "마이 페이지",
    link: "user",
  },
  {
    name:"공부시간 기록하기",
    link:"record",
  },
  {
    name: "랭킹보기",
    link: "rank"
  }
];
