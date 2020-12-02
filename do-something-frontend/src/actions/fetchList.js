export default function fetchList() {
  return (dispatch) => {
    const url = 'http://localhost:3001/activities'
    fetch(url)
      .then(res => res.json())
      .then(list => { dispatch({type: "FETCH_LIST", payload: list})})
  }
}