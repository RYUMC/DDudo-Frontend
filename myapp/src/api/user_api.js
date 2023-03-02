import { selector } from "recoil";

import { followerState, followingState } from "../atoms/user_atom";

export const getFollowingSelector = selector({
  key: "getFollowingSelector",
  get: ({get})=>{
    get(followingState)
    
  }
}) 