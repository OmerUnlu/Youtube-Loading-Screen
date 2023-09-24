import './App.css';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
       <Sidebar/>
       <div className='MainContainer'>
        <TopBar/>
        <Feed/>
       </div>
       
    </div>

  );
}

export default App;
