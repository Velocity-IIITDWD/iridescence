import React,{ useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from './components/CardContainer';
import LandingPage from "./components/LandingPage";
import Blog from "./components/event_blog";
import PageLoading from "./components/PageLoading";
import Lensation from "./components/Lensation/Lensation";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <PageLoading />;
  }
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/team" element={<CardContainer />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<Blog />} />
          <Route path="/lensation" element={<Lensation/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
