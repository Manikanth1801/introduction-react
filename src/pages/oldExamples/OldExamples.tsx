import React, { useEffect } from 'react'
import FirstInput from '../../components/inputs/FirstInput'
import StateLift from '../../components/inputs/StateLift'
import StateExample from '../../components/stateExample/StateExample'
import { CounterProvider } from '../../context/CounterContext'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { clear } from 'console'

const OldExamples = () => {
    const navigation = useNavigate()
    const [number, setNumber] = React.useState(0)
    useEffect(() => {
        console.log('old example Mounted')
        const timer = setInterval(() => {console.log('Tick')}, 3000)
        return ()=>{
            clearInterval(timer)
        }
      },[number]);
    const handleClick = () => {
        return navigation('/home')
    }
  return (
    <div>
        <>
        <div>
            <Button type = 'primary' onClick={handleClick}>Go to Home</Button>
            <Button type = 'primary'onClick={()=>setNumber(10)} >Start Timer</Button>
        </div>
      <CounterProvider>
      <StateExample />
      </CounterProvider>
      <FirstInput />
      </>
      <div>
        <StateLift />
      </div>
    </div>
  )
}

export default OldExamples