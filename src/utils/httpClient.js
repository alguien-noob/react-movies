const API = process.env.REACT_APP_API
const AUTH = `Bearer ${process.env.REACT_APP_AUTH}`
const TYPE = 'application/json;charset=utf-8'
export const get = async path => {
    const headers = {
        Authorization: AUTH,
        'Content-Type' : TYPE
    }
    try {
        await timelapse(1000)
        return await fetch(`${API}${path}`,{headers})
        .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)));

    } catch (error) {
        console.error(error)
        return error instanceof Error 
        ? error : new Error(error.message || 'desconocido')
    }
}
const timelapse = ms => new Promise(resolve => setTimeout(resolve, ms))