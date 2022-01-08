import React from 'react'
import Hoc from '../Hocs/Hoc'
import {FaHome,FaFacebook,FaPhone,FaVoicemail } from 'react-icons/fa';
function Contact() {
    return (
        <div>
            <div className="contact-section">
                <div className="row">
                <div className="colum-info">
                    <h3>Contact Information</h3>
                      <li> <FaHome className='icons'/> Home : Dhaka,Dhanmondi </li>
                      <li> <FaFacebook className='icons' /> Facebook: Nerob Ahamed </li>
                      <li> <FaVoicemail className='icons' /> Gmail : nerob0000@gmail.com </li>
                      <li> <FaPhone className='icons' /> Phone : 01756808137 </li>

                </div>
                <div className="colum-info">
                    <form action="">
                    <label>Name : </label>
                    <br />
                    <input type="text" placeholder='Enter Your Name' />
                    <br />
                    <label>Email : </label>
                    <br />
                    <input type="email" placeholder='Enter Your Email' />
                    <br />
                    <label>PassWord : </label>
                    <br />
                    <input type="password" placeholder='Enter Your PassWord' />
                    <br />
                    <textarea name=""  cols="25" rows="5"></textarea>
                    <br />
                    <button type='submit'>Send</button>
                    </form>
                 

                </div>
                </div>
           
            </div>
            
           
        </div>
    )
}

export default Hoc(Contact)
