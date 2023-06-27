// actions.js
// export const login = () => {
//     return { type: 'LOGIN' };
//   };

// export function login() {
//   return {
//     type: 'LOGIN',
//   }
// }

// This action is dispatched when the user clicks on increment or decrement button in the
// ParentComponent.

export function increment() {
  return {
    type: 'INCREMENT',
  }
}

export function decrement() {
  return {
    type: 'DECREMENT',
  }
}
