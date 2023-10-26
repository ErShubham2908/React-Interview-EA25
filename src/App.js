import './App.css';
import Counter from './Day 1/Counter';
import Compo from './Day 2/Conditinal/Compo';
import CompoLazy from './Day 2/LazyCompo/CompoLazy';
import Parent from './Day 2/Props/Parent';
import RoutesCompo from './Day 2/Route/RoutesCompo';

function App() {
  return (
    <div className="App">
      {/* Day 1 */}
      {/* <Counter /> */}
      {/* Day 2 */}
      {/* <Parent /> */}
      {/* <RoutesCompo /> */}
      {/* <Compo /> */}
      <CompoLazy />
    </div>
  );
}

export default App;
