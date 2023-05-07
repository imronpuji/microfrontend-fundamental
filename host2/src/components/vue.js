import React,{useEffect, useRef, lazy} from "react"
import { mount } from "app4/App"


const VueRemote = () => { 
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current)
    }, [])
    return <div ref={ref} />
}


export default VueRemote
