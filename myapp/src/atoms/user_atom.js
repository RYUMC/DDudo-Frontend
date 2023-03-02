import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export  const selectedDayState = atom({
  key: "selectedDayState",
  default: new Date(),
});

export const followingState = atom({
  key: "followingState",
  default: [
    {
      id: "ensubcribe",
      username: "이은섭"
    }
  ]
})

export const followerState = atom({
  key: "followerState",
  default: [
    {
      id: "ojy",
      username: "오진영"
    }
  ]
})