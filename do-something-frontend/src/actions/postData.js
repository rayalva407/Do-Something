export default function postData(activity) {
  console.log('b')
  return async (dispatch) => {
    console.log('c')
    const url = 'http://localhost:3001/activities'
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({activity})
    }

    try {
      const res = await fetch(url, config)
      const activity = await res.json()
      dispatch({type: "POST_DATA", payload: activity})
    }
    catch (error) {
      console.log(error)
    }
    
  }
}