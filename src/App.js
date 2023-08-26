import React from 'react';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Token from './components/tokenaddress';
import Address from './components/pairaddress';
import "./App.css"
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" Component={Token}/>
    <Route exact path="/address" Component={Address}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;
