import axios from "axios";
import { useQuery } from "react-query";

const fetchHeros = () => {
  return  axios.get("http://localhost:4000/heros")
}
const fetchFriends = () => {
   return axios.get("http://localhost:4000/friends")
}
const ParallelQueries = () => {
    const { data: heross } = useQuery("heros", fetchHeros)
    const { data: friendss } = useQuery("friends", fetchFriends)
    return (
        <div>
            Parallel Queries...
        </div>
    )
}

export default ParallelQueries
