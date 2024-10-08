import React, { useState } from 'react';
import TemperatureInput from './components/tempratre/TemperatureInput';
import { CounterProvider } from './context/CounterContext';
import { CounterDisplay } from './components/counter/CounterDisplay';
import Parent from './components/duplicate/Parent';
import StateExample from './components/stateExample/StateExample';
import FirstInput from './components/inputs/FirstInput';
import StateLift from './components/inputs/StateLift';

const App: React.FC = () => {
  const [temperature, setTemperature] = useState('');

  return (
    <div>
      {/* <TemperatureInput
        scale="C"
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <TemperatureInput
        scale="F"
        temperature={((parseFloat(temperature) * 9) / 5 + 32).toString()}
        onTemperatureChange={(temp) =>
          setTemperature(((parseFloat(temp) - 32) * 5) / 9 + '')
        }
      />
      <Parent />
      <div className="context">
        <CounterProvider>
          <CounterDisplay />
        </CounterProvider>
      </div> */}
      <div className="">
      {/* <TemperatureInput
        scale="F"
        temperature={((parseFloat(temperature) * 9) / 5 + 32).toString()}
        onTemperatureChange={(temp) =>
          setTemperature(((parseFloat(temp) - 32) * 5) / 9 + '')
        }
      /> */}
      </div>
      <>
      {/* <StateExample /> */}
      {/* <FirstInput /> */}
      </>
      <div>
        <StateLift />
      </div>
    </div>
  );
};

export default App;











// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/Header';
// interface User{
// name: string,
// email: string,
// address: {
//   city: string,
//   zipcode: string
// }
// }

// function App() {
//   const [users, setUsers] = useState<any>()
//   const [message, setMessage] = useState<string>('')
//   const menu:any = [
//     {
//       name: "Home",
//       link: "/"
//     },
//     {
//       name: "About",
//       link: "/about"
//     },
//     {
//       name: "Contact",
//       link: "/contact"
//     }
//   ]
//   const handleMessage=(msg:string)=>{
//     setMessage(msg)
//   }
//   const fetchData = async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     setUsers(data)
//   }
  
//   return (
//     <div className="App">
//       <>
//       <Header menu = {menu} onMessage={handleMessage}/>
//       </>
//       <h1>User Profile</h1>
//       {
//         users?.map((user:any,i:any)=>(
//           <div className="user" style={{border:"1px solid black"}} key={i}>
//             <h3>Name: {user.name}</h3>
//             <h3>Email: {user.email}</h3>
//             <h3>City: {user.address.city}</h3>
//             <h3>Zipcode: {user.address.zipcode}</h3>
//           </div>
//         ))
//       }
//       <article>
//         {message}
//       </article>
//       <button onClick={fetchData}>
//         Fetch Data
//       </button>
//     </div>
//   );
// }

// export default App;
