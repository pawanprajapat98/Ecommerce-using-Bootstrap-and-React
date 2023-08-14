import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import Home from './Home'
import Product from './Product';
import Singleproduct from './Singleproduct';
import Cart from './Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import NewProduct from './NewProduct';
export const globalstate=createContext({})
function App() {
  const [gitem,setgitem]=useState([])
  return (
    <>
     <BrowserRouter>
     <globalstate.Provider value={{gitem,setgitem}}>

    
         <Navbar/>
        <Routes>
              {/* <Route path='/' element={<Navbar/>}></Route> */}
              <Route path='/Cart' element={<Cart/>}></Route>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Product' element={<NewProduct/>}>
                 <Route index element={<Product/>}></Route>
                 <Route path=':id' element={<Singleproduct/>}></Route>
              </Route>
              
        </Routes>
        </globalstate.Provider>
     </BrowserRouter>
   
      
     
    </>
  )
}

export default App;
