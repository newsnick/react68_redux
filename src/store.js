// import { createStore } from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer)

// export default store

// npm install @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'

const store = configureStore({
  reducer: counterReducer,
})

export default store
