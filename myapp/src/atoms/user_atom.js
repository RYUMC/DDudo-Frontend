import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const dayState = atom({
    key: 'dayState',
    default: {
        year : "",
        month : "",
        day : ""
    }
    ,
    effects_UNSTABLE: [persistAtom],
  });