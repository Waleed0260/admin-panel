import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightsSde/RightSide';
function App() {
  return (
    <div className="App">
      <div className='appGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
