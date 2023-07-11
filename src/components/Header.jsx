import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
       <div className='container'>
        <div className="row">
            <div className="col-lg-2">
             <Link to='/' >Where in the world?</Link>
            </div>
            <div className="mynav col-lg-10 text-end">
             <p>Dark Mode</p>
            </div>
        </div>
       </div>
    </header>
   
  )
}

export default Header