import React, { useContext } from 'react'
import { Store } from './StoreCompo';

function Home() {
   const contextData = useContext(Store).data;
   console.log(contextData);
  return (
    <div>
      
    </div>
  )
}

export default Home;
