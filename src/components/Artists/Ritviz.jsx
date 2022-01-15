import React from 'react'
import "./Artist.css"

export default function Ritviz() {
    return (
        <>
            <div className='Artistfull'>
            {/* <Ritviz/> */}
                <div className='top'>
                       <div>
                           <img src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO49YTXz-large.jpg" alt="artist-img"/>
                       </div>
                       <div>
                           <p>PLAYLIST</p>
                           <h1>Ritviz Mix</h1>
                           <p>English , Hindi</p>
                           <p>Made for You . 5421 likes</p>
                       </div>
                </div>
                <div className='bottom'>
                <div>
                 <div className="song-name">
                     <div>1</div>
                     <div>Liggi</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>2</div>
                     <div>Udd gaye</div>
                     <div>5.40</div>
                 </div>
                 <div className="song-name">
                     <div>3</div>
                     <div>Barrat</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>4</div>
                     <div>Sage</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>5</div>
                     <div>Thandi Hawa</div>
                     <div>4.40</div>
                 </div>
             </div>
                </div>
            </div>
        </>
    )
}
