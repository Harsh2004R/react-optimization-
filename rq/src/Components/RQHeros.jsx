import React from 'react'
import { useQuery } from "react-query"
import axios from "axios"
import { Link } from 'react-router-dom'
const fetchHeros = () => {
  return axios.get("http://localhost:4000/heros")
}
function RQHeros() {
  const onSuccess = (data) => {
    console.log(`perform any side effects on success of query...${data}`)

  }
  const onError = (error) => {
    console.log(`perform any side effects on error of query...${error}`)
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("heros", fetchHeros,
    {
      // cacheTime:100000  increase cache time default is 5 min.
      // staleTime: 10000 // This will prevent of fetch call till given time 
      // refetchOnWindowFocus : true ,false, "always" // it will fetch data when it changed in db if we set it to true or always.
      // retryOnMount : true,false,"always" // this will only triggred when component mounts if true or always...
      // refetchInterval : true,2000,false  // this will pole(make fetch call again and again) our data after given interval like 2000ms...
      // refetchIntervalInBackground :true,false,2000 // this will poll our data as background even if we are not on our browser...
      onSuccess: onSuccess,
      onError: onError,
      // select:(data)=>{
      //   const Heros = data.data.map((el)=>el.name)
      //   return Heros;
      // }, this select option is use to transform your data as for your needs...



      enabled: false,



    }
  )
  console.log(isLoading, isFetching);
  if (isLoading || isFetching) {
    return (
      <div><h2>Loading....</h2></div>
    )
  }
  if (isError) {
    return (
      <div> <h2>{error.message}</h2></div>
    )
  }
  return (
    <>
      <div>
        <h1>
          RQHeros page
        </h1>
        <button onClick={refetch}>Fetch on click</button>
        {data?.data.map((el, i) => {
          return (
            <div key={i}>
              <Link to={`/heros-details/${el.id}`}>{el.name}</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RQHeros
