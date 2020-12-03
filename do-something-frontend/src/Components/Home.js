import React from 'react';
import {connect} from 'react-redux'


const Home = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Bored? Here is something to do</h1>
        <p>{props.activity}</p>
        <button onClick={props.clickProp}>Something Else</button>
        <button onClick={props.saveProp}>Save to List</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps)(Home);