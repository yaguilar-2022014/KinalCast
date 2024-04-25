import { useState } from "react"
import toast from "react-hot-toast"
import { getChannelsRequest } from "../../services/api.js"

export const useChannels = () => {
    const [channels, setchannels] = useState([])
    const getChannels = async(isLogged = false)=>{
        const channelsData = await getChannelsRequest()
        console.log(channelsData)

        if(channelsData.error){
            return toast.error(
                channelsData.err?.respone?.data ||
                'Error al obtener los canales'
            )
        }
        if(!isLogged){
            return setchannels(
                {
                    channels: channelsData.data?.channels
                }
            )
        }
    }
  return {
    getChannels,
    isFetching: !Boolean(channels),
    allChannels: channels?.channels
  }
}
