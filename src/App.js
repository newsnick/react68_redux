/* import ParentComponent from './ParentComponent'

function App() {
  return <ParentComponent />
}

export default App
 */

// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './store'
// import ParentComponent from './ParentComponent'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ParentComponent />
//     </Provider>
//   )
// }

// export default App

import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'

const App = () => {
  return (
    <div>
      <h3>Redux Counter Example</h3>
      <Counter />
    </div>
  )
}
export default App
