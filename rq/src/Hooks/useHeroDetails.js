import { useQuery } from "react-query";
import axios from "axios";
const fetchHeroByID = (heroID) => {
 return axios.get(`http://localhost:4000/heros/${heroID}`)
//  .then((res)=>{

//   }).catch((error)=>{

//   })
}
export const useHeroDetails = (heroID) => {
  return useQuery(['hero-details', heroID],()=> fetchHeroByID(heroID))
}