import React from 'react';
import '../styles/Section.css';
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="section" >
      <p className="section-text"><Link to='/lensation' id='lenslink' >Lensation</Link></p>
    </div>
  );
};

export default Section;
