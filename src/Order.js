import React from 'react'
import './Style.css'
const Order = () => {
  return (
   <>
   <div id="form">
     <h1>Place Your Order</h1>
     <form action='/check' method='get'>
     <input type="number" placeholder='PHONE NUMBER'/><br/><br/>
     <input type="text" placeholder='FIRST NAME'/><br/><br/>
     <input type="text" placeholder='LAST NAME'/><br/><br/>
     <input type="email" placeholder='YOUR E MAIL'/><br/><br/>
     <textarea placeholder="ADDRESS"></textarea><br/><br/>
  <input type="submit" value="Buy Now"/>
     </form>
     </div>
   </>
  )
}

export default Order