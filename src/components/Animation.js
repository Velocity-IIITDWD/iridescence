import React from 'react';
import Lottie from 'lottie-react';
import '../styles/Animation.css'; // Import the CSS file

function Animation({animationData}) {
  return (
    <div className='ani_div'>
      <div className='lottie-model'>
        <Lottie className='svg-lottie' animationData={animationData}/> 
      </div>
    </div>
  )
}

export default Animation;
