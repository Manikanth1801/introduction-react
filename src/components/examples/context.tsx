// // UserContext.tsx
// import React from 'react';

// interface User {
//   name: string;
// }

// const UserContext = React.createContext<User | null>(null);

// export default UserContext;

// // App.tsx
// import React, { useState } from 'react';
// import UserContext from './UserContext';
// import GrandParent from './GrandParent';

// const App: React.FC = () => {
//   const [user] = useState({ name: 'Alice' });

//   return (
//     <UserContext.Provider value={user}>
//       <GrandParent />
//     </UserContext.Provider>
//   );
// };

// export default App;

// // Child Component
// import React, { useContext } from 'react';
// import UserContext from './UserContext';

// const Child: React.FC = () => {
//   const user = useContext(UserContext);

//   return <p>User: {user?.name}</p>;
// };

// export default Child;
export {}
