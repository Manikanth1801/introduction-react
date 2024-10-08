import { FC } from 'react'
export interface UserInterface{
    user: {
        name: string;
        age: number
    },
}
const UserDetail:FC<UserInterface> = ({user}) => {
    console.log(user)
    const {name, age} = user   
  return (
    <div>
        <h1>User Detail</h1>
        <p>name: {name}</p>
        <p>Age : {age}</p>
    </div>
  )
}

export default UserDetail