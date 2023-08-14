import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { globalstate } from './App'
import { Link } from 'react-router-dom'

function Product() {
    const [data,setdata]=useState([])
    const [filter,setfilter]=useState(data)
    const [loading,setloading]=useState(false)

    const {gitem,setgitem}=useContext(globalstate)
    // const [buttonState,setButtonState]=useState(false)
    // let componetmounted=true;
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((Resolve)=>{
      // console.log(Resolve.data)
      setdata(Resolve.data)
      setfilter(Resolve.data)
      setloading(false)
    })
  },[])
  function handalClick(e,Result){
    // console.log(Result)
    setgitem([...gitem, Result])
    // const btn= item.filter((e,id)=>{return index!=id});
    //  setButtonState
    e.preventDefault()
    
   
   }
  const Loading =()=> {
         return(
            <>
            Loading....
            </>
         )
  }
  function filterproduct(item){
      const updateddata=data.filter((content)=>content.category===item)
      setfilter(updateddata);
  }
  const ShowProducts =()=> {
    return(
       <>
         <div className='buttons d-flex justify-content-center mb-5 pb-5'>
              <button className='btn btn-outline-dark me-2' onClick={()=>setfilter(data)}>All</button>
              <button className='btn btn-outline-dark me-2' onClick={()=>filterproduct("men's clothing")}>Men's Clothing</button>
              <button className='btn btn-outline-dark me-2'onClick={()=>filterproduct("women's clothing")}>Women's Clothing</button>
              <button className='btn btn-outline-dark me-2' onClick={()=>filterproduct("jewelery")}>Jewelery</button>
              <button className='btn btn-outline-dark me-2'onClick={()=>filterproduct("electronics")}>Electronic</button>
              
         </div>
         {
          filter.map((product)=>{
                return(
                   <div className='col-md-3 mb-4'>
                          <div class="card h1-100 text-center p-4" key={product.id}>
                             <Link to={`/Product/${product.id}`}><img src={product.image} class="card-img-top" alt={product.title} height='250px'/></Link>
                              <div class="card-body">
                                <h5 class="card-title mb-0"><Link to={`/Product/${product.id}`}>{product.title.substring(0,12)}...</Link></h5>
                                <p class="card-text lead fw-bold">${product.price}</p>
                                <a href="#" class="btn btn-outline-dark" onClick={(e)=>handalClick(e,product)} >Buy Now  </a>
                              </div>
                            </div>
                   </div>
                )
          })
         }
       </>
    )
  }
  return (
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr/>
        </div>
      </div>
      <div className='row justify-content-center'>
        {loading? <Loading/>:<ShowProducts/>}
      </div>
            
    </div>
  )
}

export default Product
