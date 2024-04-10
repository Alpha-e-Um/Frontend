import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    isLogin: false,
    userId: 0,
    email: "",
    avatar: "",
    mbti: "",
    name: {
      first: "",
      fullName: "",
    },
  },
});
