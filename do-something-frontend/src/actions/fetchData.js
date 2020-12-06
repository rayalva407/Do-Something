export default function fetchData() {
  return async (dispatch) => {
    const url = 'http://www.boredapi.com/api/activity/'

    try {
      const res = await fetch(url)
      const activity =await res.json();
      dispatch({type: "FETCH_DATA", payload: activity})
    }
    catch (error) {
      console.log(error)
    }
  }
}
