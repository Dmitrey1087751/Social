
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagerContainer from './components/Messager/MessagerContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {

  return (
  
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile />}></Route>
            <Route path='/Messager' element={<MessagerContainer />}></Route>
            <Route path='/News' element={<News/>}></Route>
            <Route path='/Music' element={<Music/>}></Route>
            <Route path='/Settings' element={<Settings/>}></Route>
            <Route path='/Users' element={<UsersContainer/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
  
}



export default App;
