import { atom, selector } from "recoil";

export interface MyData {
  
  meta: {
    title: string;
  };
}

export const myDataState = atom<MyData>({
  key: "myDataState",
  default: {
    meta: {
      title: "jimin-Portfolio",
    },
  },
});

export const MyDataTitleSelector = selector<string>({
  key: "myDataTitleSelector",
  get: ({ get }) => {
    const myData = get(myDataState);
    return myData.meta.title;
  },
});

export const nicknameState = atom({
  key: "nicknameState",
  default: {
    nickname: "항상 배고픈 개발자 유지민입니다",
  },
});

export const aboutState = atom({
  key: "aboutState",
  default: {
    name: "Ji Min Yu",
    nickname: "항상 배고픈 개발자 유지민입니다.",
    profileImg: " ",
    email: "zzzzm1n126@gmail.com",
    githubUrl: "https://github.com/wlals1126",
    blogUrl: "https://blog.naver.com/yuz11m26/222971530978",
    instaUrl: "https://www.instagram.com/y.novtwentysix/",
  },
});

export const skillSetState = atom({
  key: "skillSetState",
  default: {
    category: "Front End Skills",
    skills: [
      { skill: "Typescript", level: "익고있어요" },
      { skill: "javascript", level: "익었어요" },
      { skill: "HTML/CSS", level: "익었지만 조금 부족해요" },
      { skill: "React", level: "익억어요" },
    ],
  },
});
