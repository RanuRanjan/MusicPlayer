import React from 'react'
// import reactRouter from 'react-router'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"
import axios from "axios";


export default function Navbar() {
   const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/HipHop")
        .then(response=> response.json())
        .then(data => setUsers(data))},[])
            
    return (
        <div>

              <header>
                  <nav>
                     <div className='logo'>
                          <div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/2560px-Amazon_Music_logo.svg.png" alt="" />
                          </div>
                     </div>
                     <div className='search-div'>
                            <div className='input-div'>
                                <input type="text" className='search-songs' />
                            </div>
                            <div className='btn-div'>
                                <button className='search-btn'> Search</button>
                            </div>
                     </div>
                     <div className='others'>
                            <div>
                                <button className='login'>Login</button>
                            </div>
                     </div>
                  </nav>
              </header>
              <div>
                {users.map(({title})=> <p>{title}</p>)}
                  {/* console.log(users) */}
              </div>
        </div>
    )
}
