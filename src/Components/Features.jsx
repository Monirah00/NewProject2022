import React from 'react'
import Hoc from '../Hocs/Hoc'
import aboutPic from '../Imges/About-Us.jpg' 


function Features() {
    return (
        <div>
           <div className="Features">
               <div className="row">
                   <div className="colum-6">
                   <img className='F-img' src={aboutPic} alt="" />
                   <h2>
                       About Details
                   </h2>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aliquam quae distinctio eligendi expedita optio adipisci recusandae, nam provident nemo, porro accusantium placeat nostrum officia magnam possimus quas in officiis.</p>
                   </div>
                   <div className="colum-6">
                   <img className='F-img' src={aboutPic} alt="" />
                       <h2>About Details</h2>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore non sed ipsam voluptatibus modi a impedit, consequuntur iure vel molestias tempore? Doloribus commodi, quidem neque modi itaque saepe. Quam, laborum!</p>

                   </div>
               </div>
           </div>
           <div className="row">
               <div className="colum-6">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi natus dicta. Error fuga fugiat eum, perferendis aperiam reiciendis cum, iste eaque pariatur aliquid commodi sapiente dolore iure odit. Soluta!</p>
               </div>
               <div className="colum-6">
                   <div className="row">
                       <div className="colum-3"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci nisi minus pariatur dolorum asperiores minima quibusdam doloremque tempora officiis alias modi, amet maiores laboriosam necessitatibus recusandae sint repellendus eum delectus?</p></div>
                       <div className="colum-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia placeat fugit repudiandae sapiente, facere aut, corrupti id debitis vel vero? Placeat voluptates perferendis necessitatibus ipsum sint maiores repellendus doloremque.</p></div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Hoc(Features)
