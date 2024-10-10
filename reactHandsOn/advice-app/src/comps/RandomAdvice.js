import React , {useState} from 'react'
import AdviceRandomList from '../Data/AdviceRandomList'

export default function RandomAdvice() {
 const [advice ,setAdvice] =useState('')   
  return (
    <div>
      <AdviceRandomList  onSelectAdvice={setAdvice} />
      <p>{advice}</p>
    </div>
  )
}
