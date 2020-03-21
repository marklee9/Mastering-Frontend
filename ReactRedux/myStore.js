import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { rootReducer } from './myReducer';

function createStore(reducer) {
  // 1. store state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;  
  let listeners = [];

  function getState() {
    return state;
  }

  // subscribe a function that will be invoked every time we call a dispatch function.
  function subscribe(listener) { 
    listeners.push(listener);

    return () => { // unsubscribe function
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function dispatch(action) {
    // update the state by calling the action
    state = reducer(state, action);

    // loop over listeners and invoke each of them.
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}


const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  // this callback will be invoked every time now.
  console.log('current State is ' + store.getState()); 
});
// unsubscribe(); // this will get rid of the subscribed callback above.
store.dispatch(ADD_TODO);
