// // Top-level component
// const App: React.FC = () => {
//     const [user, setUser] = useState({ name: 'Alice' });
  
//     return <GrandParent user={user} />;
//   };
  
//   // Intermediate components
//   const GrandParent: React.FC<{ user: User }> = ({ user }) => {
//     return <Parent user={user} />;
//   };
  
//   const Parent: React.FC<{ user: User }> = ({ user }) => {
//     return <Child user={user} />;
//   };
  
//   // Target component
//   const Child: React.FC<{ user: User }> = ({ user }) => {
//     return <p>User: {user.name}</p>;
//   };
export {}
