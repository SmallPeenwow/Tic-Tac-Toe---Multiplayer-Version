import React from 'react'

const GameArea = ({isDisplay, setIsDisplay, isPlayerName}) => {
  return (
    <div className={isDisplay == 3 ? "flex flex-col justify-center h-full" : "hidden"}>
        <h1 className="text-5xl">{isPlayerName}</h1>

        <h2 className="border-b-2 border-b-white w-72 text-2xl">Score Board</h2>
        <div className="flex justify-center text-xl">
            <div className="flex flex-col p-2 px-4 w-28 overflow-hidden">
                <p>You</p>
                <p>0</p>
            </div>
            <div className="border-l-2 border-l-white"></div>
            <div className="flex flex-col p-2 px-4 w-28 overflow-hidden">
                <p>Player2</p>
                <p>0</p>
            </div>
        </div>
        {/* <button className="button-style button-color-one w-20">Quit</button> */}
    </div>
  )
}

export default GameArea