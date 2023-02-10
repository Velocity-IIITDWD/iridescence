import React from 'react'
import "../styles/Clique.css"
import CardPotowalk from './CardPotowalk'
import CardWorkshop from './CardWorkshop'

function Clique() {
  return (
    <div className='cq-cont'>
      <h1 className="cq-heading">Clique</h1>
      <hr className='cq-line' />
      <div className='thirddiv'>
        <div className='cq-first'>
          <CardPotowalk className="im" />
          <p className='type1'>Photowalk</p>
        </div>
        <div className='cq-second'>
          <CardWorkshop className="im" />
          <p className='type2'>Begginers Workshop</p>
        </div>
      </div>
    </div>
  )
}

export default Clique