import './App.css';
import Login from './components/Auth/Login';
import { Myproducts } from './components/Myproducts';
import { Topbar } from './components/Topbar';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progress, setprogress] = useState(0);


  return (
    <>
      

      <Router>
      <LoadingBar
            height={3}
            color='#f5c011'
            progress={progress}
        />
        <Topbar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Myproducts setprogress={setprogress}/>} />
            <Route exact path="/login" element={<Login setprogress={setprogress}/>} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
