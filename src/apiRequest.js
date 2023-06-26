import React from 'react'

const apiRequest = async(url = "", option = null, errMsg = null) => {
    try {
        const response = await fetch(url,option);
        if(!response.ok) throw Error("please reload the app")
    } catch(error) {
        errMsg = error.Message
    } finally {
        return errMsg
    }
}

export default apiRequest