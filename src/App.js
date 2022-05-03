
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/Profile/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Messager from './components/Messager/Messager';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/Messager' element={<Messager/>}></Route>
            <Route path='/News' element={<News/>}></Route>
            <Route path='/Music' element={<Music/>}></Route>
            <Route path='/Settings' element={<Settings/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
