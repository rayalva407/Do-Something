export default function postData(activity) {
  console.log(activity)
  return (dispatch) => {
    const url = 'http://localhost:3001/activities'
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({activity})
    }

    fetch(url, config)
      .then(r => r.json())
      .then(activity => {dispatch({type: "POST_DATA", payload: activity})})
  }
}