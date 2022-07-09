import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Shop';
import Order from './Order';
import Favorites from './Favorites'
import Contact from './Contact'
import Profile from './Profile'
import Content from './Content';
import Product1 from './Product/Product1';
import Product2 from './Product/Product2';
import Check from './Check';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Homepage/>
   <Routes>
   <Route path='/' element={<Content/>}/>
   <Route path='/home' element={<Content/>}/>
   <Route path='/product1' element={<Product1/>}/>
   <Route path='/product2' element={<Product2/>}/>

   <Route path='/fvrt' element={<Favorites/>}/>
   <Route path='/check' element={<Check/>}/>

  <Route path='/shop' element={<Shop/>}/>
  <Route path='/order' element={<Order/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/buy' element={<Order/>}/>


   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App