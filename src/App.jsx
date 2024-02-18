import React from 'react'
import "./index.css"

function App() {
  const [sidebarButton, setSidebarButton] = React.useState(false)

  function clickHandler() {
    setSidebarButton(prevSidebarButton => !prevSidebarButton)
  }

  const sidebarContent = (
    <h1>SideBar</h1>
  )
  return (
    <>
    <button onClick={clickHandler}>{sidebarButton?"hide" : "display"}</button>
    {sidebarButton && sidebarContent}
    <p>hi</p>
    </>
  )
}

export default App
