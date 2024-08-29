import React from 'react'
import { useQuery } from "react-query"
import axios from "axios"
const fetchHeros = () => {
  return axios.get("http://localhost:4000/heros")
}
function RQHeros() {
  const { isLoading, data, isError, error } = useQuery("heros", fetchHeros)
  if (isLoading) {
    return (
      <h2>Loading....</h2>
    )
  }
  if (isError) {
    return (
      <h2>{error.message}</h2>
    )
  }
  return (
    <>
      <h1>
        RQHeros page
      </h1>
      {data?.data.map((el, i) => {
        return (
          <div key={i}>
            {el.name}
          </div>
        )
      })}
    </>
  )
}

export default RQHeros
