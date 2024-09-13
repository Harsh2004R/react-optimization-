import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"
const fetchColors = () => {
    return axios.get(`http://localhost:4000/colors`)
}
const Pagination = () => {
    const onSuccess = (data) => {
        console.log(`perform any side effects on success of query...${data}`)

    }
    const onError = (error) => {
        console.log(`perform any side effects on error of query...${error}`)
    }
    const { isError, error, isLoading, data, } = useQuery("colors", fetchColors, {
        onSuccess: onSuccess,
        onError: onError,
    })
    if (isError) {
        return <div><h2>Error....{error.message}</h2></div>
    }
    if (isLoading) {
        return <div><h2>Loading....</h2></div>
    }
    return (
        <div>
            {data?.data.map((el, i) => (
                <div key={i}>
                    {el.color}
                </div>
            ))}
        </div>
    )
}

export default Pagination
