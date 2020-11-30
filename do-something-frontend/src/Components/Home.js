import React from 'react';


const Home = (props) => {
  return (
    <div>
      <h1>Bored? Here is something to do</h1>
        <p>{props.activityProp}</p>
        <button onClick={props.clickProp}>Something Else</button>
        <button onClick={props.saveProp}>Save to List</button>
    </div>
  );
}

export default Home;