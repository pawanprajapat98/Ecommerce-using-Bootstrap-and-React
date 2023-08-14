import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { globalstate } from './App'

function Singleproduct() {
    const [singleproduct,setsingleproduct]=useState([])
    const {gitem,setgitem}=useContext(globalstate)
    const obj=useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/` + obj.id).then((Resolve)=>{
            console.log(Resolve.data);
            setsingleproduct(Resolve.data)
        })
    },)

    function handalcart(e,Result){
        // console.log(Result)
        setgitem([...gitem, Result])
    
        e.preventDefault()
        
    
       }
  return (
    <div className='single'>
        <div className='single-img col-md-6'>
            <img src={singleproduct.image} alt={singleproduct.title} height='400px' width='400px'></img>
        </div>
        <div className='single-content col-md-6'>
            <h4 className='text-uppercase text-black-50'>
                {singleproduct.category}
            </h4>
            <h1 className='display-5'>
               {singleproduct.title}
            </h1>
            <p className='lead fw-bolder'>
                Rating{singleproduct.rating && singleproduct.rating.rate}
                <i className='fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>
                ${singleproduct.price}
            </h3>
            <p className='lead'>{singleproduct.description}</p>
            <button className='btn btn-outline-dark' onClick={(e)=>handalcart(e,singleproduct)}>
                Add to Cart
            </button>
            <Link to='/Cart' className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</Link>
        </div>
    </div>
  )
}

export default Singleproduct
