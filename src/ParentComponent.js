import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const updateOnLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div>
      <ChildComponent isLoggedIn={isLoggedIn} onLogin={updateOnLogin} />
    </div>
  )
}

export default ParentComponent
