import React from 'react'

function ShowLaps({laps}) {
  return (
    <div>
      {laps.map((e,i)=>{
        if(e==="00:00:00")return null
        return(
          <div  className='lap_item'>
            {e}
          </div>
        )
      })}
    </div>
  )
}

export default ShowLaps