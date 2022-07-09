import React from 'react'
import {Link} from 'react-router-dom'
import '../Style.css'
import data from '../Details'
const Product2 = () => {
  return (
    <>
    <div id="pr1">
    
      <img src={data[1].imageURL} style={{marginTop:"100px",marginLeft:"30px"}}height="200" width="250" alt='?'/>
       <p id="left">{data[1].productId}<br/><b>{data[1].name}</b><br/><br/>PRICE={data[1].price}<br/><br/><Link to='/order'> <input type="button" value="Buy Now"/></Link></p>
   
    </div>
    </>
  )
}

export default Product2