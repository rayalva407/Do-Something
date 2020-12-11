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
        list: action.payload
      }
    case "POST_DATA":
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}