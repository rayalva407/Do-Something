export default function listReducer(state, action) {
  switch(action.type) {
    case "FETCH_DATA":
      return {
        activity: action.payload.activity,
        type: action.payload.type,
        list: state.list
      }
    case "FETCH_LIST":
      return {
        activity: state.activity,
        type: state.type,
        list: action.payload.list
      }
    case "POST_DATA":
      return {
        activity: action.payload.activity,
        type: action.payload.type,
        list: [...state.list, action.payload.activity]
      }
    default:
      return state
  }
}