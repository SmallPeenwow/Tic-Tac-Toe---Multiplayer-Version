import React from 'react'

const JoinGame = () => {
  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background">
      <div className= "flex flex-col gap-10 visible"> 
        <input type="text" className="input-field" placeholder="Enter Name" maxLength={15}/>
        <input type="text" className="input-field" placeholder="Room ID"/>
        <div className="flex justify-around mt-4">
          <button className="button-style button-color-two w-24">Back</button>        
          <button className="button-style button-color-one w-24">Let's Go</button>        
        </div>
      </div>
    </div>
  )
}

export default JoinGame