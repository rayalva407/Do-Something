export default function fetchList() {
  return async (dispatch) => {
    const url = 'http://localhost:3001/activities'

    try {
      const res = await fetch(url)
      const activity = await res.json()
      dispatch({type: "FETCH_LIST", payload: activity})
    }
    catch (error) {
      console.log(error)
    }
  }
}