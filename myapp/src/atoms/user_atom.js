import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const IDState = atom({
    key: "IDState",
    default: '',
  });
  
export  const PWState = atom({
    key: "PWState",
    default: '',
  });