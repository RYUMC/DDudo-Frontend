import './Follow_module.css'
import normal from '../../../../assets/search-normal.png'
import close from '../../../../assets/close-circle.png'
import { useEffect, useMemo, useState } from 'react'
import React from 'react'

import { websocketState, inputSearchState, searchedList } from '../../../../atoms/websocket_atom'
import { followerState, followingState } from '../../../../atoms/user_atom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { searchUserSelector } from '../../../../api/websocket_api'

const UserList = React.memo(
  (props)=>{
    const following = useRecoilValue(followingState)
    const follower = useRecoilValue(followerState)
    if (props.isFollowing)
      return (
        <>
          {following.map((userInfo)=>{
            return <UserItem type="Delete" id={userInfo.id} name={userInfo.username}/>
          })}
        </>
      )
    else
      return(
        <>
          {follower.map((userInfo)=>{
            return <UserItem type="Follower" id={userInfo.id} name={userInfo.username}/>
          })}
        </>
      )
  }
)


export function Follow_module(){
  const [checkFollowing, setCheckFollowing] = useState(true)

  const [socket, setSocket] = useRecoilState(websocketState)
  const [inputState, setInputState] = useRecoilState(inputSearchState)
  const [searchList, setSearchList] = useRecoilState(searchedList)

  const [searchUser, setSearchUser] = useRecoilState(searchUserSelector);

  
  if(!socket){
    const ws = new WebSocket(`ws://15.164.149.157/search?id=${localStorage.getItem("user")}`);
    ws.addEventListener('open', ()=>{setSocket(ws)});
    ws.addEventListener('message', (event)=>{setSearchList(JSON.parse(event.data))});
  }

  return(
    <div className="follow-frame" onClick={(e)=>e.stopPropagation()}>
      <div className='follow-frame-left-side'>
        <header>
          <div className='search'>
            <img src={normal} />
            <input placeholder='검색' value={inputState} onChange={(e)=>{setInputState(e.target.value); setSearchUser()}}/>
            <img src={close} style={{width:"20px", height:"20px", cursor:"pointer"}} onClick={()=>setInputState("")}/>
          </div>
        </header>
        <main>
          <UserSearchList />
        </main>
      </div>
      <div className='follow-frame-right-side'>
        <header>
          <div className='items' style={checkFollowing ? {color: "black", fontWeight:"700"} : {}}
            onClick={()=>{
              setCheckFollowing(true)
            }}
          >Following</div>
          <div className='items' style={checkFollowing ? {} : {color: "black", fontWeight:"700"}}
            onClick={()=>{
              setCheckFollowing(false)
            }}
          >Follower</div>
        </header>
        <main>
          <UserList isFollowing={checkFollowing} />    
        </main>
      </div>
    </div>
  )
}

function UserSearchList(){
  const searchList = useRecoilValue(searchedList)
  return(
    <>
      {
        searchList.map((userInfo)=>{
          return <UserItem type="Following" id={userInfo.id} name={userInfo.username}/>
        })
      }
    </>
  )
}

function UserItem(props){
  return(
    <div className="user">
      <div>
        <div style={{fontSize: "1.1rem", fontWeight: "600"}}>
          {props.id}
        </div>
        <div>
          {props.name}
        </div>
      </div>
      <button style={(props.type == "Follower") ? {backgroundColor:"#434343", color:"white"}: {cursor:"pointer"}}>
        {props.type}
      </button>
    </div>
  )
}