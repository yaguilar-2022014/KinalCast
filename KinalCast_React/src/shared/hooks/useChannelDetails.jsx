import { useState } from "react"
import toast from "react-hot-toast"
import { getChannelDetailsRequest } from "../../services/api.js"

export const useChannelDetails = () => {
    const [channelDetails, setchannelDetails] = useState(null)
    const getChannelDetails = async (id) => {
        const response = await getChannelDetailsRequest(id)
        if (response.error) {
            return toast.error(
                response?.err?.response?.data ||
                'Error al obtener info del canal'
            )
        }
        setchannelDetails(response.data)
    }
    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}
