import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// WebSocket 연결 상태를 저장하는 atom
export const websocketState = atom({
  key: 'websocketState',
  default: null,
});

export const inputSearchState = atom({
  key: "inputSearchState",
  default: '',
})

export const searchedList = atom({
  key: "searchedList",
  default: []
})