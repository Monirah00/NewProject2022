import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                           <h3>Company</h3>
                           <hr />
                           <ul>
                           <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Get Started</li>
                        </ul>
                        </div>

                        <div className="footer-col">
                           <h3>Services</h3>
                           <hr />
                           <ul>
                               <li>App Design</li>
                            <li>Web Design</li>
                            <li>Logo Design</li>
                            <li>Banner Desing</li>
                        </ul>
                        </div>

                        <div className="footer-col">
                           <h3>Courses</h3>
                           <hr />
                           <ul>
                           <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>React js</li>
                        </ul>
                        </div>

                        <div className="footer-col">
                           <h3>Accounts</h3>
                           <hr />
                           <ul>
                           <li>Profile</li>
                            <li>My Account Us</li>
                            <li>Prefrences</li>
                            <li>Purchase</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
