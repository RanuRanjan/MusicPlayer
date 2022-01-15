import React, { useState, useEffect } from "react";
import "./Artist.css";
export default function Pritam() {
//   const [track, setTrack] = useState([]);

//   const getData = async () => {
//     let res = await fetch("http://localhost:3005/Pritam");
//     let data = await res.json();
//     // console.log(data)
//     setTrack(data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

  return (
    <>
      <div className="Artistfull">
        {/* <Pritam/> */}
        <div className="top">
          <div>
            <img
              src="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_xl_1516707336.webp"
              alt="artist-img"
            />
          </div>
          <div>
            <p>PLAYLIST</p>
            <h1>Pritam Unpluged</h1>
            <p>Hindi </p>
            <p>Made for You . 1000 likes</p>
          </div>
        </div>

        <div className="bottom">
             <div>
                 <div className="song-name">
                     <div>1</div>
                     <div>Khairiyat</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>2</div>
                     <div>Shayad</div>
                     <div>5.40</div>
                 </div>
                 <div className="song-name">
                     <div>3</div>
                     <div>Kabira</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>4</div>
                     <div>Tum Se Hi</div>
                     <div>4.40</div>
                 </div>
                 <div className="song-name">
                     <div>5</div>
                     <div>Kalank</div>
                     <div>4.40</div>
                 </div>
             </div>
        </div>
      </div>
    </>
  );
}
