import React from 'react'

function Laps({lapData}) {
  return (
    <div className='lapdata'>
          {
            lapData.map((e)=>{
              return(
                <ul className='laplist'>{e}</ul>
              )
            })
          }
        </div>
  )
}

export default Laps