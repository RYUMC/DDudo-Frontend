import { websocketState, inputSearchState, searchedList, connectState } from "../atoms/websocket_atom";
import { atom, selector, selectorFamily } from "recoil";


const resetAtom = atom({
  key: 'resetAtom',
  default: 0
})


export const searchUserSelector = selector({
  key: "searchUserSelector",
  get: ({ get }) => {
    const ws = get(websocketState);
    const searchText = get(inputSearchState);
    get(resetAtom)

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(searchText);
    }

    return searchText;
  },
  set: ({set})=>{
    set(resetAtom, (id)=>id+1)
  }
});

