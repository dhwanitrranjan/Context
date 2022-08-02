import './App.css';
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontrolled';
import Context from './Components/Context';
import Application from './Activity 4/Application';

function App() {
  return (
    <div className="App">
      <h3>Controlled</h3>
      <Controlled />
      <br/> 
      <h3>Uncontrolled</h3>
      <Uncontrolled />
      <br/>
      <Context />
      <br/>
      <Application />
    </div>
  );
}

export default App;
