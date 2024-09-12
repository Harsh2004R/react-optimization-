import { useHeroDetails } from "../Hooks/useHeroDetails.js"
import { useParams } from "react-router-dom"
const RQHeros_details = () => {
    const { heroID } = useParams()
    const { isLoading, data, isError, error } = useHeroDetails(heroID)

    if (isLoading) {
        return <div>
            <h2>Loading....</h2>
        </div>
    }

    if (isError) {
        return <div>
            <h2>error....{error.message}</h2>
        </div>
    }

    return (
        <div>
            RQ Heros Detail..
            <div>
                {data?.data.name} - {data?.data.views}
            </div>
        </div>
    )
}

export default RQHeros_details
