import React from "react";
import Navbar from "./components/Navbar";
import PageLoading from "./components/PageLoading";
import Home from "./components/Home";
import Desc from "./components/Desc";
import Features from "./components/Features";
import Section from "./components/Section";
import Clique from "./components/Clique";
import Topevents from "./components/Topevents";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright"

function App() {
  return (
    <>
      <PageLoading/>
      <Navbar/>  
      <Home/>
      <Desc/>
      <Features/>
      <Section />
      <Clique/>
      <Topevents/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
