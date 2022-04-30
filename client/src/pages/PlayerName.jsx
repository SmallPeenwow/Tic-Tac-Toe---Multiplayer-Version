import React from 'react'

const PlayerName = ({isDisplay, setIsDisplay}) => {
  return (
      <div className={isDisplay == 1 || isDisplay == 2 ? "flex flex-col gap-10 visible" : "hidden"}>     
        <input type="text" className="input-field"/>
        <input type="text" className={isDisplay == 2 ? "input-field" : "hidden"}/>
        <div className="flex justify-around mt-4">
            <button onClick={() => setIsDisplay(0)} className="button-style button-color-two w-24">Back</button>        
            <button className="button-style button-color-one w-24">Let's Go</button>        
        </div>
    </div>
  )
}

export default PlayerName