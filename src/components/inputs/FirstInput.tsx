import {FC, useState} from 'react'

const FirstInput:FC = () => {
    const [input,setInput] = useState<any>('')
    const [newValue,setNewValue] = useState<any>('')
    const changeHandler = (e:any) => {
        e.preventDefault()
        console.log(e, 'our handler is working')
        setInput(e.target.value)
    }
    const clickHandle = () => {
        return setNewValue(input)
    }
  return (
    <div>
        <input type="text" value={input} onChange={(event) => changeHandler(event)} />
        <button onClick={clickHandle} >Submit</button>
        <p>{newValue}</p>
        </div>
  )
}

export default FirstInput