import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Myproducts } from './components/TopbarOptions/Myproducts';
import { Topbar } from './components/Topbar';
import React,{useState} from 'react';
import ProductState from './components/context/MyproductsState';
import OrderState from './components/context/MyordersState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { Myorders } from './components/TopbarOptions/Myorders';
import Addproduct from './components/TopbarOptions/Addproduct';

function App() {

  const [progress, setprogress] = useState(0);


  return (
    <>
      <OrderState setprogress={setprogress}>
      <ProductState setprogress={setprogress}>

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
            <Route exact path="/myorders" element={<Myorders setprogress={setprogress}/>} />
            <Route exact path="/addproduct" element={<Addproduct setprogress={setprogress}/>} />
            <Route exact path="/login" element={<Login setprogress={setprogress}/>} />
            <Route exact path="/signup" element={<Signup setprogress={setprogress}/> }/>
          </Routes>
        </div>
      </Router>
      </ProductState>
      </OrderState>

    </>
  );
}

export default App;
