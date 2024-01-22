import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Myproducts } from './components/TopbarOptions/Myproducts';
import { Topbar } from './components/Topbar';
import React,{useState} from 'react';
import ProductState from './components/context/MyproductsState';
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
      
      <ProductState>

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
            <Route exact path="/signup" element={<Signup setprogress={setprogress}/> }/>
          </Routes>
        </div>
      </Router>
      </ProductState>

    </>
  );
}

export default App;
