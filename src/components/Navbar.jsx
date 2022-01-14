import React from 'react'
// import reactRouter from 'react-router'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
    return (
        <div>

              <header>
                  <nav>
                      <div> <Link to='/'> <img src="" alt="logo" /> </Link>  </div>
                      <div>search</div>
                      <div>login</div>
                  </nav>
              </header>
        </div>
    )
}
