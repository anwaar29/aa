import React from 'react'
import '../Style.css'
import {Link} from 'react-router-dom'

import data from '../Details'
const Product1 = () => {
  return (
    <>
    <div id="pr1">
    
      <img src={data[0].imageURL} style={{marginTop:"100px",marginLeft:"30px"}}height="200" width="250" alt='?'/>
       <p id="left">{data[0].productId}<br/><b>{data[0].name}</b><br/><br/>PRICE={data[0].price}<br/><br/><Link to='/order'> <input type="button" value="Buy Now"/></Link></p>
   
    </div>
    </>
  )
}

export default Product1