import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
const url = "http://localhost:3005/Pritam"; // fetch from this url

const English = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
   

    const countries = await response.json();
   // console.log("countries", countries);
    setCountries(countries);
   // console.log("countries", countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  
  return (
    <>
      <section className="grid">
        {countries.map((e) => {
          const flag = e.img;
        
          const id = e.id;
          const album = e.moviename;
          const artist = e.name;
         
          return (
           
            <article  onClick={()=> {handlelink(e)}}key={id}>
              <div>
                <img  src={flag} alt={flag} />
                <div className="details">
                  
                  <h4>
                    Album :<span>{album}</span>
                  </h4>
                  <h4>
                    Artist : <span>{artist}</span>
                  </h4>
                
                </div>
              </div>
            </article>
            
          );
        })}
      </section>
    </>
  );
};

export default English;