import React from 'react';

function Activity(props) {
  return (
    <div>
      <h1>Bored? Here is something to do</h1>
      <p>{this.props.act}</p>
      <button onClick={this.props.click}>Something Else</button>
    </div>
  );
}

export default Activity;