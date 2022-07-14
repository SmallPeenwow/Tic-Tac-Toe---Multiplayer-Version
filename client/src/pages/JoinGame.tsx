import {useState} from 'react'
import { Link } from 'react-router-dom';

const JoinGame = () => {
  const [isPlayerName, setIsPlayerName] = useState("");
  const [isRoomCode, setIsRoomCode] = useState("");

  const setName = (event:any) => {
    setIsPlayerName(event.target.value);
  };

  const setRoomId = (event:any) => {
    setIsRoomCode(event.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col text-white text-center justify-center items-center bg-main-background">
      <div className= "flex flex-col gap-10 visible"> 
        <input type="text" className="input-field" placeholder="Enter Name" maxLength={15} value={isPlayerName} onChange={setName}/>
        <input type="text" className="input-field" placeholder="Room ID" value={isRoomCode} onChange={setRoomId}/>
        <div className="flex justify-around mt-4">
          <Link to="/" className="button-style button-color-two w-24">Back</Link>        
          <Link to={`/gameArea/${isPlayerName}`} className="button-style button-color-one w-24">Let's Go</Link>        
        </div>
      </div>
    </div>
  )
}

export default JoinGame