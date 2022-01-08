import React from 'react'
import Hoc from '../Hocs/Hoc'
import Data from '../Data/Sdata'
import About from './About'

function Home() {
    
    return (
        <div>
           <div className="Home-bg">
               <About />
               <h3 className='Home-heading'>Trending Food in Your City</h3>
               <hr />
               <div className="row">
                   
                   {Data.CardData.map((item,index) => {
                       return(
                           <div className="col" key={index}>
                               <div className="card">
                               <img src={item.img} alt="" />
                              <div className="card-body">
                                  <h3>{item.Title}</h3>
                                  <p>{item.Desc}</p>
                              </div>
                               </div>
                             
                           </div>
                       )
                   })}

               </div>
           </div>
        </div>
    )
}

export default Hoc(Home)
