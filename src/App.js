
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Messager from './components/Messager/Messager';



function App(props) {
  
  return (
  
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile postsData={props.state.profilePage.postsData} addPost={props.addPost}/>}></Route>
            <Route path='/Messager' element={<Messager dialogsData={props.state.messager.dialogsData} 
            messagesData={props.state.messager.messagesData}/>}></Route>
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
