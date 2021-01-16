import { useState } from "react"
import axios from 'axios'

    const initialRequestInfo = {
        error: null,
        data: null,
        loadind: false,
    }

export default function useApi(config){

    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

    async function call(localConfig){
        setRequestInfo({
            ...initialRequestInfo,
            loadind: true,
        })

        let response = null

        try {
            response = await axios({
                baseURL: 'http://localhost:5000',
                ...config,
                ...localConfig
            })
    
            setRequestInfo({
                ...initialRequestInfo,
                data: response.data,
            })
        } catch(error) {
            setRequestInfo({
                ...initialRequestInfo,
                error,
            })
        }

        if (config.onCompleted) {
            config.onCompleted(response)
        }
    }

    return [
        call,
        requestInfo
    ]
}