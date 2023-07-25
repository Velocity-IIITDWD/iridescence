import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./components/Navbar";
import CardContainer from './pages/Team/CardContainer';
import LandingPage from "./pages/Home/LandingPage";
import Blog from "./pages/Work/event_blog";
import PageLoading from "./pages/Loading/PageLoading";
import Lensation from "./pages/Lensation/Lensation";
import EventsPage from "./pages/Events/EventsPage";
import PhotowalkPage from "./pages/Photowalk/PhotowalkPage";
import WorkshopPage from "./pages/Workshop/WorkshopPage";

import Travel from "./pages/Lensation/Travel";
import Monochrome from "./pages/Lensation/Monochrome";
import Symmetry from "./pages/Lensation/Symmetry";
import Macro from "./pages/Lensation/Macro";
import Silhouette from "./pages/Lensation/Silhouette";
import Footer from "./components/Footer";


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
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/photowalk" element={<PhotowalkPage/>}/>
          <Route path="/workshop" element={<WorkshopPage/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/monochrome" element={<Monochrome/>}/>
          <Route path="/symmetry" element={<Symmetry/>}/>
          <Route path="/silhouette" element={<Silhouette/>}/>
          <Route path="/macro" element={<Macro/>}/>

        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
