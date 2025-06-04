import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

import './index.scss'



export const NavBar = () => {

  return (
    <>
    <div className='navbar'>
      <div>
        <h1 className='navbar-title'>Que antojo</h1>
      </div>

    <div className="navbar-categories" >  
       <ul >
          <li>Salado</li>
          <li>Dulce</li>
        </ul>
    </div>
     
      <div className='navbar-widget'>
        <CartWidget/>
      </div>
    </div>
    </>
  )
}
