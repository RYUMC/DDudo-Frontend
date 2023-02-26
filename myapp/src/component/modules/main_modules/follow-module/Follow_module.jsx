import './Follow_module.css'
import normal from '../../../../assets/search-normal.png'
import close from '../../../../assets/close-circle.png'
import { useState } from 'react'

export function Follow_module(){
  const [searchState, setSearchState] = useState()

  return(
    <div className="follow-frame" onClick={(e)=>e.stopPropagation()}>
      <div className='follow-frame-left-side'>
        <header>
          <div className='search'>
            <img src={normal} />
            <input placeholder='검색' value={searchState} onChange={(e)=>{setSearchState(e.currentTarget.value)}}/>
            <img src={close} style={{width:"20px", height:"20px", cursor:"pointer"}} onClick={()=>setSearchState("")}/>
          </div>
        </header>
        <main>
          <UserItem type="Follower"/>
        </main>
        <div></div>
      </div>
      <div className='follow-frame-right-side'>
        <header>
          <div className='items' style={{color: "black", fontWeight:"700"}}>Following</div>
          <div className='items'>Follower</div>
        </header>
        <main>
          <UserItem type="Following"/>
        </main>
      </div>
    </div>
  )
}

function UserItem(props){
  return(
    <div className="user">
      <div>
        <div style={{fontSize: "1.1rem", fontWeight: "600"}}>
          eunsubcribe
        </div>
        <div>
          이은섭
        </div>
      </div>
      <button style={(props.type == "Follower") ? {backgroundColor:"#434343", color:"white"}: {}}>
        {props.type}
      </button>
    </div>
  )
}