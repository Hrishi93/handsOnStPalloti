import React, {useState} from 'react'
import AdviceData from './AdviceData'

export default function AdviceList({onSelectAdvice}) {

    const [category , setCategory] = useState('');

    const getRandomAdvice = (category) =>{
        const advices = AdviceData[category];
        const randomIndex = Math.floor(Math.random()* advices.length);
        return advices[randomIndex];
    }

    const handleGeneratedAdvice = () =>{
          if (category){
            const advice = getRandomAdvice(category);
            onSelectAdvice(advice);
          }
    }

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Select Catogory</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Finance">Finance</option>
        <option value="Nagpurkar">Nagpurkar</option>
      </select>
      <button onClick={handleGeneratedAdvice} disabled={!category}>Get Advice</button>
    </div>
  )
}
