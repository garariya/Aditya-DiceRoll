import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa";
import { FaDiceThree } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { FaDiceFive } from "react-icons/fa";
import { FaDiceSix } from "react-icons/fa";
import { useState } from "react";
import "./DiceRolling.css";



function DiceRolling() {
  const sides = [<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />];
  const [die1, setDie1] = useState(sides[0]);
  const [die2, setDie2] = useState(sides[0]);
  const [isRolling, setIsRolling] = useState(false)

  const roll = () => {
    

    setIsRolling(true);

    setTimeout(()=>{
      setIsRolling(false);
      setDie1(sides[Math.floor(Math.random()*sides.length)])
      setDie2(sides[Math.floor(Math.random()*sides.length)])
    }, 1000)
  }


  const dieClassname = `die ${isRolling? 'die-shaking': ''}`
  return (
    <div className="dice-container">
      <h2>Dice Rolling</h2>
      <div className="dice">
        <div className={dieClassname}>{die1}</div>
        <div className={dieClassname}>{die2}</div>
      </div>
      <button disabled={isRolling} onClick={roll}>{isRolling ? "Rolling" : "Roll Dice"}</button>
    </div>
  )
}

export default DiceRolling;