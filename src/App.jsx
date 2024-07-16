
import { useReducer } from 'react'
import './App.css'
import { countAtom,evenSelector } from './store/atoms/count'
import { RecoilRoot, useRecoilState,useRecoilValue} from "recoil"

function App() {
  

  return (
    <>
    <RecoilRoot>

     <Count  />
    </RecoilRoot>
    </>
  )
}
function Count(){
   const count  = useRecoilValue(countAtom)
  return (
    <>
    <Display />
    <Button />
   
    </>
  )

}
function Display(){
  const count =  useRecoilValue(countAtom)
  return (
    <>
    count:{count}
    <RenderEven/>
    </>
  )
}
function RenderEven(){
  
  const isEven = useRecoilValue(evenSelector)
  return (
    <>
    {isEven ? null :"even number "}
    </>
    
  )
}
function Button(){
  const [count,setCount] = useRecoilState(countAtom)
  return (
    <>
    <button onClick={() =>{setCount(count +1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1) }}>Decrease</button>
    </>
  )
}

export default App
