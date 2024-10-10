import React , {useState} from 'react'
import AdviceList from '../Data/AdviceList'
export default function PerticularAdvice() {

const [advice ,setAdvice] = useState('')   
  return (
    <div>
      <AdviceList  onSelectAdvice={setAdvice}/>  
      <p>{advice}</p>
    </div>
  )
}
