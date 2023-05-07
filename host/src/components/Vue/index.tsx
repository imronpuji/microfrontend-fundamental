import { mount } from "app3/App"
import React, { useRef, useEffect } from "react"

export default () => {
  const ref = useRef(null)

  console.log(mount)

  return <h1>mount</h1>
}
