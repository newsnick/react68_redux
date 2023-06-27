// const initialState = {
//   isLoggedIn: false,
// }

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'LOGIN':
//       return { ...state, isLoggedIn: true }
//     default:
//       return state
//   }
// }
// export default rootReducer

// this takes the current state and an action as parameters.
const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer
