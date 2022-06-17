import React from "react"
// import Header from './Header'
import MenuAppBar from './AppBar'
import Card from './Card'


const Home = () => {
    return(
        <div className='Home'>
            <MenuAppBar />
            <Card />
            {/* <Header /> */}
        </div>
    )
}

export default Home