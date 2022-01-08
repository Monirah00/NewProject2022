import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const  Hoc = (PagesComponents) =>  {
    return function withPages(){

        return (
            <div>
                <Navbar />
                <Header />
                <PagesComponents />
                <Footer />
            </div>
        )

    }
   
}

export default Hoc
