import { useState } from 'react';
import './App.css';
import Counter from './Day 1/Counter';
import Compo from './Day 2/Conditinal/Compo';
import CompoLazy from './Day 2/LazyCompo/CompoLazy';
import Parent from './Day 2/Props/Parent';
import RoutesCompo from './Day 2/Route/RoutesCompo';
import StateUp from './Day 3/Uplifting/StateUp';
import APIData from './Day 3/Axios/APIData';

function App() {
  const [data, setData] = useState('Hi....')
  return (
    <div className="App">
      {/* Day 1 */}
      {/* <Counter /> */}
      {/* Day 2 */}
      {/* <Parent /> */}
      {/* <RoutesCompo /> */}
      {/* <Compo /> */}
      {/* <CompoLazy value = {data} /> */}
      {/* <StateUp /> */}
      <APIData />
    </div>
  );
}

export default App;
