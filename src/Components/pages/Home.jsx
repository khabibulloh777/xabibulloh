import React from 'react'
import home  from './Home.module.css'
import Header from '../Header/Header'
import Section1 from '../Section1/Section1'
function Home() {
    return (
        <div className={home.home}>
         <Header/>
         <Section1/>   
        </div>
    )
}

export default Home
