
import { useReducer } from 'react'
import './App.css'
import { countAtom } from './store/atoms/count'
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
