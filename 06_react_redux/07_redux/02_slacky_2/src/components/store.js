import { createStore } from 'redux';


const initalState = {
  userName: "",
  messages: [],
}
function loginReducer(state = initalState, action) {
  if (action.type === "NEW_USER"){
    return {
      ...state,
      userName: action.newUserName
    }
  } else {
    return state;
  }
  console.log(state);
}


let store = createStore(loginReducer)

export default store;
