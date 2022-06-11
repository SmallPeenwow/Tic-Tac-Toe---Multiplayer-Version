import React, { useState } from 'react';

const [display, setDisplay] = useState(false);

// Will be used to reset the game and board will be cleared
const playAgainButton = () => {
  return (
    <div>
      <button className={display ? "button-color-one" : "hidden"}>Play Again</button>
    </div>
  )
}

export default playAgainButton