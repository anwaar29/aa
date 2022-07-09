import React from 'react'
import data from './Details'
import {Link} from 'react-router-dom'
const Content = () => {
  return (
   <>
   <div id="outer">
      <div id="b1">
        <img src={data[0].imageURL} height="300px" width="220px"alt='?'/>
      <Link to='/product1'> <p style={{fontSize:"12px"}}>{data[0].name} <p>DISCOUNT={data[0].discount}</p></p></Link> 
        <p>PRICE {data[0].price}</p>
       
      </div>
      <div id="b2">
      <img src={data[1].imageURL} height="300px" width="200px"alt='?'/>
      <Link to='/product2'>  <p style={{fontSize:"12px"}}>{data[1].name} <p>DISCOUNT={data[1].discount}</p></p></Link>
        <p>PRICE {data[1].price}</p>
      </div>
      <div id="b3">
      <img src={data[0].imageURL} height="300px" width="200px"alt='?'/>
      <Link to='/product1'>   <p style={{fontSize:"12px"}}>{data[0].name} <p>DISCOUNT={data[0].discount}</p></p></Link>
        <p>PRICE {data[0].price}</p>
      </div>
     
    </div>
   </>
  )
}

export default Content