import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeIndex = () => {

    const [items,setItems]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setItems(data))
        .catch(err=>console.log(err))
    },[])

  return (

    <div className="container">
        <div className="row g-4">
        
     {
        items && items.map(item=>{
          
            var lowerCase=item.name.common.toLowerCase()
            
            return(
                
                <div key={item.name.common} className="col-lg-3">
                    <Link to ={`details/${lowerCase}`}>
                  <div className="card tall">
                    <img src={item.flags.png} className="card-img-top" alt="..."/>
                  <div className="card-body">
                <h5 className="card-title">{item.name.common}</h5>
                <p className="card-text">Population:{item.population}</p>
                <p className="card-text">Region:{item.region}</p>
                <p className="card-text">Capital:{item.capital}</p>
                </div>
            </div>
            </Link>
        </div>
              
               
            )
        })
     }

    
        </div>
    </div>
  
  )
}

export default HomeIndex