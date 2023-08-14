import React, { useContext } from 'react'
import { globalstate } from './App'

function Cart() {
    const {gitem,setgitem}=useContext(globalstate)
    function handalDelet(e,index){
        e.preventDefault()
         setgitem(gitem.filter((e,id)=>index!=id));
      }
  return (


    <div>
           {
             gitem.map((Result,index)=>{
                return(
                     <div>
                    <div class="card mb-3 mt-3"  key={Result.index}>
                    <div class="row g-0">
                        <div class="cart-class col-md-6">
                        <img src={Result.image} class="" alt={Result.title} height='250px'/>
                        </div>
                        <div class="col-md-5">
                        <div class="card-body">
                            <h1 class="card-title">{Result.title}</h1>
                            <h2 className=''>${Result.price}</h2>
                            <p class="card-text">{Result.description}</p>
                            <button to='/Cart' className='btn btn-dark ms-2 px-3 py-3' onClick={(e)=>handalDelet(e,index)}>Delete Product</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>    
                )
             })
           }
              
    </div>
  )
}

export default Cart
