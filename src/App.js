import React,{ useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from './components/CardContainer';
import LandingPage from "./components/LandingPage";
import Blog from "./components/event_blog";
import PageLoading from "./components/PageLoading";
import Lensation from "./components/Lensation/Lensation";
import EventsPage from "./components/EventsPage";
import PhotowalkPage from "./components/PhotowalkPage";
import WorkshopPage from "./components/WorkshopPage";

import Travel from "./components/Lensation/Travel";
import Monochrome from "./components/Lensation/Monochrome";
import Symmetry from "./components/Lensation/Symmetry";
import Macro from "./components/Lensation/Macro";


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Silhouette from "./components/Lensation/Silhouette";

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
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/photowalk" element={<PhotowalkPage/>}/>
          <Route path="/workshop" element={<WorkshopPage/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/monochrome" element={<Monochrome/>}/>
          <Route path="/symmetry" element={<Symmetry/>}/>
          <Route path="/silhouette" element={<Silhouette/>}/>
          <Route path="/macro" element={<Macro/>}/>

        </Routes>
      </Router>

    </>
  );
}

export default App;
