export function manageFriends(state = {
  friends: [{
    hometown: "",
    id: "",
    name: ""
  }]
}, action){
  switch(action.type){

    case "ADD_FRIEND":
    return Object.assign({}, state, {
      friends: [...state.friends, action.friend]
    })

    case "REMOVE_FRIEND":
    let removalIndex = state.friends.findIndex(friend => friend.id === action.id);
    return Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, removalIndex),
        ...state.friends.slice(removalIndex + 1)
      ]
    })

    default:
    return state
  }

}
