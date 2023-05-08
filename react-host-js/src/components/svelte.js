import React from "react"
import Mount from "app5/App"


new Mount({
    target: document.getElementById("svelte"),
    props: {
        isolated: true
      }
})

const App = () => {
    return <div/>
}

export default App
