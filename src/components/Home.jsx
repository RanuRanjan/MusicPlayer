import React from 'react'
import './Home.css'
import HomeCards from './HomeCards'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { Player } from './Player/Player'
export default function Home() {
    return (
        <div>
        <Navbar/>
            <section>
                <div className='left'>
                    <div> 
                      <div className='listname'>Artist List</div>
                        <ul>
                            <li><Link to='/badshah'>Badshah</Link></li> 
                            <li><Link to='/eminem'>Eminem</Link></li> 
                            <li><Link to='/mithun'>Mithun</Link></li> 
                            <li><Link to='/pritam'>Pritam</Link></li> 
                            <li><Link to='/Papon'>Papon</Link></li> 
                            <li><Link to='/eminem'>Ritviz</Link></li> 
                        </ul>
                    </div>
                </div>
                <div className='right'>
                 <div><Link to='/ritviz'>

                 <HomeCards className="finalcards" img="https://thisis-images.scdn.co/37i9dQZF1DZ06evO49YTXz-large.jpg" name="Ritviz"/>
                 </Link>

                 <Link to='/badshah'>

                 <HomeCards className="finalcards" img="https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_xl_1516185303.webp" name="Badshah"/>
                 </Link>

                 <Link to='/Eminem'>

                 <HomeCards className="finalcards" img="https://i.scdn.co/image/ab67706f000000037a181d9fed936372672c40ca" name="Eminem"/>
                 </Link>
                 </div>
                 
                 <div>

                 <Link to='/pritam'>

                 <HomeCards className="finalcards" img="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_xl_1516707336.webp" name="Pritam"/>
                 </Link>

                   <Link to='/mithun'>
                 <HomeCards className="finalcards" img="https://i1.sndcdn.com/artworks-000100326683-gn4ohn-t500x500.jpg" name="Mithun"/>

                   </Link>
 
                    <Link to='/papon'>

                 <HomeCards className="finalcards" img="https://c.saavncdn.com/644/Best-Of-Papon-Hindi-2015-500x500.jpg" name="Papon"/>
                    </Link>
                 </div>
                
                
                </div>
                
            </section>
            <div>
            <Player/>
            </div>
        </div>
    )
}
