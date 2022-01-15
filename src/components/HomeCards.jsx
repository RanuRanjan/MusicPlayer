import React from 'react'
 import "./HomeCard.css"

export default function HomeCards({img,name}) {
    return (
        <div>
                 <div className='Cards'>
                     <div className='Album-pic'>
                         <div>
                             <img src={img} alt="" />
                         </div>
                     </div>
                     <div className='card-details'>
                         <h4>{name}</h4>
                         <p>Artist</p>
                     </div>
                 </div>
        </div>
    )
}
