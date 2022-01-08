import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='Nav'>
        <li className='list'>
          <Link className='Ancor' to="/">Home</Link>
        </li>
        <li  className='list'>
          <Link className='Ancor' to="/Contact">Contact</Link>
        </li>
        <li  className='list'>
          <Link className='Ancor' to="/Features">Features</Link>
        </li>
      </ul>



    </div>
  )
}

export default Navbar
