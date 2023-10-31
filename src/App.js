import { useState } from 'react';
import './App.css';
import Counter from './Day 1/Counter';
import Compo from './Day 2/Conditinal/Compo';
import CompoLazy from './Day 2/LazyCompo/CompoLazy';
// import Parent from './Day 2/Props/Parent';
import RoutesCompo from './Day 2/Route/RoutesCompo';
import StateUp from './Day 3/Uplifting/StateUp';
import APIData from './Day 3/Axios/APIData';
import StoreCompo from './Day 3/Context/StoreCompo';
import UseState from './Day 3/Hooks/UseState';
import UseEffect from './Day 3/Hooks/UseEffect';
import Parent from './Day 3/Hooks/UseCallBack/Parent';
import UseRefCompo from './Day 3/Hooks/UseRefCompo';
import UseReducerCompo from './Day 3/Hooks/UseReducerCompo';
import Opponent2 from './Day 5/HOC/Oppeoent2';
import Opponent1 from './Day 5/HOC/Opponent1';
import ClassCompo from './Day 5/LifeCycle/ClassCompo';

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
      {/* <APIData /> */}
      {/* <StoreCompo /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <Parent /> */}
      {/* <UseRefCompo /> */}
      {/* <UseReducerCompo /> */}
      {/* <Opponent2 /> */}
      {/* <Opponent1 /> */}
      <ClassCompo />
    </div>
  );
}

export default App;
