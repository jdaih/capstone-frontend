import React from "react"
// import Header from './Header'
import MenuAppBar from './AppBar'
import InfoCard from './Card'
import CovidData from './CovidData'


const Home = () => {
    return(
        <div className='Home'>
            <MenuAppBar />
            <InfoCard />
            <CovidData />
            {/* <Header /> */}
        </div>
    )
}

export default Home