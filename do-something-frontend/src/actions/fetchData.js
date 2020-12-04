export default function fetchData() {
  return (dispatch) => {
    const url = 'http://www.boredapi.com/api/activity/'
    fetch(url)
      .then(res => res.json())
      .then(activity => { dispatch({type: "FETCH_DATA", payload: activity})})
  }
}
