import React from 'react'

const PlayerName = ({ isDisplay, setIsDisplay, setName, resetInputField, landingPageDisplay, isPlayerName, setRoomId, isRoomCode }) => {
  
  return (
      <div className={isDisplay == 1 || isDisplay == 2 ? "flex flex-col gap-10 visible" : "hidden"}>     
        <input type="text" className="input-field" placeholder="Enter Name" value={isPlayerName} onChange={setName} maxLength="15"/>
        <input type="text" className={isDisplay == 2 ? "input-field" : "hidden"} value={isRoomCode} placeholder="Room ID" onChange={setRoomId}/>
        <div className="flex justify-around mt-4">
            <button onClick={() => {
              landingPageDisplay(); 
              resetInputField();
              }} 
              className="button-style button-color-two w-24">Back
            </button>        
            <button disabled={isPlayerName === ''} onClick={() => setIsDisplay(3)} className="button-style button-color-one w-24">Let's Go</button>        
        </div>
    </div>
  )
}

export default PlayerName