import React from "react";
import Navbar from "./components/Navbar";
import CardContainer from './components/CardContainer';
import LandingPage from "./components/LandingPage";




import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>

 
<Navbar/>
  <Routes>
    <Route path="/team"  element={<CardContainer/>}/>
    <Route path="/"  element={<LandingPage/>}/>
  </Routes>


</Router> 


    </>
  );
}

export default App;
