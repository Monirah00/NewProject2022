import React from 'react'
import aboutPic from '../Imges/About-Us.jpg' 

function About() {
    return (
        <div>
            <div className="About-us">
                <div className="colum-6">
                    <h3 className='About-h3'>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, necessitatibus enim sint dicta ad quidem, voluptas quod mollitia, dolore deserunt officiis quia tempora unde modi veniam. Autem ullam odio est?
                    </p>
                </div>
                <div className="colum-6">
                    <img src={aboutPic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
