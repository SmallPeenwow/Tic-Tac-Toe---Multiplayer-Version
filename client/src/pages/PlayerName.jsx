import React from 'react'

const PlayerName = ({isDisplay, toggle}) => {
  return (
      <div className={!isDisplay ? "hidden" : "flex flex-col gap-14 visible"}>     
        <input type="text" className="w-96 pb-4 border-b-2 bg-transparent border-b-white outline-none text-center text-3xl"/>
        <div className="flex justify-around">
            <button onClick={toggle} className="button-style button-color-two w-24">Back</button>        
            <button className="button-style button-color-one w-24">Let's Go</button>        
        </div>
    </div>
  )
}

export default PlayerName