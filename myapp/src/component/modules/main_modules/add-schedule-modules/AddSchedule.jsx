import './AddSchedule.css'


export function AddSchedule(){

  return(
    <div className='add-schedule'
      onClick={(e)=> e.stopPropagation()}
    ></div>
  )
}