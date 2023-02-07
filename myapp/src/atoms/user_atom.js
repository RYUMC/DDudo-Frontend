import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export  const selectedDayState = atom({
  key: "selectedDayState",
  default: new Date(),
});