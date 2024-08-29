import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Home.jsx'
import RQHerosPage from '../Components/RQHeros.jsx'
import HerosPage from '../Components/Heros.jsx'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/RQHeros' element={<RQHerosPage />} />
            <Route path='/Heros' element={<HerosPage />} />
        </Routes>
    )
}

export default AllRoutes
