import React, { lazy } from "react"
const AppSecond = lazy(() => import("app2/App"))

const App = () => {
  return (
    <div>
      <AppSecond />
    </div>
  )
}

export default App
