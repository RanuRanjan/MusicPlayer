import React from 'react'
import Navbar from '../Navbar'

export default function Mithun() {
    return (
        <div>
            <div className='Artistfull'>
            {/* <Navbar/> */}
                <div className='top'>
                       <div>
                           <img src="https://i1.sndcdn.com/artworks-000100326683-gn4ohn-t500x500.jpg" alt="artist-img"/>
                       </div>
                       <div>
                           <p>PLAYLIST</p>
                           <h1>Mithuns Originals</h1>
                           <p>Hindi </p>
                           <p>Made for You . 50000 likes albumbs</p>
                       </div>
                </div>
                <div className='bottom'>
                <div>
                 <div className="song-name">
                     <div>1</div>
                     <div>Sunn Raha hu </div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>2</div>
                     <div>Hum Dum</div>
                     <div>5.40</div>
                 </div>
                 <div className="song-name">
                     <div>3</div>
                     <div>Tu hai Kaha</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>4</div>
                     <div>Tay Hai</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>5</div>
                     <div>Ishq Fakerri</div>
                     <div>4.40</div>
                 </div>
             </div>
                </div>
            </div>
        </div>
    )
}
