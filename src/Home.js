import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='Hero'>
        <div class="card bg-dark text-white border-0">
              <img src="./NEW.jpg"className="card-img" alt="..." height='635px' width='100%'/>
                <div class="card-img-overlay d-flex fd-column   justify-contant-end">
                    <div className='Container'>
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2">CHEACK OUT ALL THE TRENDS</p>
                    </div>
                  
                    {/* <p class="card-text">Last updated 3 mins ago</p> */}
                </div>
        </div>
        <Product/>
    </div>
   
  )
}

export default Home
