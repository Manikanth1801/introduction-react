import { useEffect } from "react";
import { Link } from "react-router-dom";

// Home.tsx
const Home: React.FC = () => {
  useEffect(() => {
    console.log('Home Mounted')
  },[]);
    return (
      <>
      <h1>Welcome to My Portfolio</h1>
      <article>
        Link to : <Link to= '/example' > Examples </Link>
      </article>
      </>
    );
  };
  
  export default Home;
  

  