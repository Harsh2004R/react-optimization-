import React, { useState, useEffect } from 'react'
import axios from "axios"
const Heros = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get("http://localhost:4000/heros").then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, [])
    if (isLoading) {
        return (
            <div>
                <h2>Loading...</h2></div>
        )
    }
    if (error) {
        return (
            <div>
                <h2>{error}</h2></div>
        )
    }
    return (

        <div>
            <h1>
                Heros page
            </h1>
            <div>
                {data.map((el, i) => {
                    return <div key={i} >{el.name}</div>
                })}

            </div>
        </div>

    )
}

export default Heros
