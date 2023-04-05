import { atom } from "recoil";

export const ImgList = atom<string[]>({
    key: "imgList",
    default:[],
});