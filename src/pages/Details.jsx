import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {name}=useParams();
  const [data,setData]=useState()
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[])
console.log(data);
  return (
    <div>
        <div className="row">
            <div className="col-lg-6">
            {/* <img src={data.flags.png} alt="..."/> */}
            </div>
            <div className="col-lg-6"></div>
        </div>
    </div>
  )
}

export default Details