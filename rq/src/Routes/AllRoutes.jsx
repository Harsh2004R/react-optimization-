import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from '../Components/Home.jsx'
import RQHerosPage from '../Components/RQHeros.jsx'
import HerosPage from '../Components/Heros.jsx'
const AllRoutes = () => {
    return (
        <>
            <div>
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/Heros">Heros</Link></h3>
                <h3><Link to="/RQHeros">RQ Heros</Link></h3>
            </div>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/RQHeros' element={<RQHerosPage />} />
                <Route path='/Heros' element={<HerosPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes
