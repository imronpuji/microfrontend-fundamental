import React, { useEffect, useRef, lazy } from "react"
import dynamic from 'next/dynamic'


const Vue = dynamic(() => import("app4/App"), { ssr: false })

const VueRemote = () => {
    const ref = useRef(null)
    useEffect(() => {
        
        Vue(ref.current)
    }, [])
    return <div ref={ref} />
}


export default VueRemote
