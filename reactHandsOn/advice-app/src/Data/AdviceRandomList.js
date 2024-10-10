import React from 'react'

const adviceArray = [
    "Believe you can and you're halfway there.",
    "It always seems impossible until it's done.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Work hard untile get Success",
    "You miss 100% of the shots you don't take.",    
];

export default function AdviceRandomList({onSelectAdvice}) {

  const getRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random()* adviceArray.length);
    return adviceArray[randomIndex];
  }

  const handleClick = () =>{
    const advice = getRandomAdvice();
    onSelectAdvice(advice)
  }  

  return (
    <div>
      <button onClick={handleClick}>Get Advice</button>
    </div>
  )
}
