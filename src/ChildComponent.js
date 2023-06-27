import React from 'react'
// Destructuring  or props, then you don't need to use props reference
// function ChildComponent ({ isLoggedIn, onLogin }){
//   const handleLoginClick = () => {
//     onLogin();
//   };
function ChildComponent(props) {
  const handleLoginClick = () => {
    props.onLogin()
  }
  return (
    <div>
      {props.isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  )
}

export default ChildComponent
