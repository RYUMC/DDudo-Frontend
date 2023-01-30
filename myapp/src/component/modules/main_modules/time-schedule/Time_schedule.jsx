import './Time_schedule.css'

export function Time_schedule(){
  const timeArray = Array.from({length: 48}, (v, i) => i);

  return(
    <div className='time-schedule'>
      <div className='content'>
      </div>
      <div className='time'>
        <div className='time-bar'></div>
          <div className='time-content'>
            {timeArray.map((i)=>{
              return(
                <span key = {i}>{i % 2 == 0 ? `${parseInt(i/2)}:00`:`${parseInt(i/2)}:30`}</span>
              )
            })}
        </div>
      </div>
    </div>
  )
}