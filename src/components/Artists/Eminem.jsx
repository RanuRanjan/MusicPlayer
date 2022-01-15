import React from 'react'
import Navbar from '../Navbar'
import "./Artist.css"
export default function Eminem() {
    return (
        <div>
            <>
            <div className='Artistfull'>
            {/* <Navbar/> */}
                <div className='top'>
                       <div>
                           <img src="https://i.scdn.co/image/ab67706f000000037a181d9fed936372672c40ca" alt="artist-img"/>
                       </div>
                       <div>
                           <p>PLAYLIST</p>
                           <h1>Eminem Rap God</h1>
                           <p>English</p>
                           <p>Made for You .100000 likes</p>
                       </div>
                </div>
                <div className='bottom'>
                <div>
                 <div className="song-name">
                     <div>1</div>
                     <div>Without Me</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>2</div>
                     <div>The real Slim Shady</div>
                     <div>5.40</div>
                 </div>
                 <div className="song-name">
                     <div>3</div>
                     <div>Not Afraid</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>4</div>
                     <div>Venom</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>5</div>
                     <div>RapGod</div>
                     <div>4.40</div>
                 </div>
             </div>
                </div>
            </div>
        </>
        </div>
    )
}
