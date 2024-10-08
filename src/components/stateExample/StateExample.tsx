import { FC, useState } from 'react'
import UserDetail from '../userDetail/UserDetail';

interface User{
    name: string;
    age: number
}
const StateExample:FC = () => {
    const customStyle:any = {
        color: 'red',
        backgroundColor: 'olive',
        padding: '10px',
        textAlign: 'center'
    }
    const [name, setName] = useState('Guest')
    const [count, setCount] = useState(0)
    const [numbers, setNumbers] = useState<number[]>([0])
    const [user, setUser] = useState<User>({
        name: 'John Doe',
        age: 25
    })
    const handleClick = () => {
        setCount(prevState=>count+1)
        setName('Vaibhav')
        addNumber(count)
    }
    const addNumber = (num:number) => {
        return setNumbers([...numbers, num])
    }
    const ageHandler = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }
  return (
    <>
    <div style={customStyle}>
        <h1>
            Welcome to our React Page
        </h1>
        <article>
            {name}
        </article>
        <button onClick={handleClick}>
            Change Name
        </button>
        <article>
            The Button has been clicked {count} times
        </article>
        <h3>
            Our array Value is {numbers}
        </h3>
    </div>
    <div className="user_detail">
        <UserDetail user={user} />
        <button onClick={ageHandler}>1 Year completed</button>

    </div>
    </>
  )
}

export default StateExample