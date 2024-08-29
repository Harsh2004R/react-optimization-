import React, { useState, useEffect } from 'react'
import axios from "axios"
const Heros = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/heros").then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <>
            <h1>
                Heros page
            </h1>
            <div>
                {data.map((el,i)=>{
                    return <div key={i} >{el.name}</div>
                })}

            </div>
        </>
    )
}

export default Heros
