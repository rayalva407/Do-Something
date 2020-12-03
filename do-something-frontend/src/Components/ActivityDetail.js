import React, { Component } from 'react';

class ActivityDetail extends Component {
  
  componentDidMount() {
    this.props.fetchActivity(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.nameProp}</h1>
        <h1>Type: {this.props.typeProp}</h1>
      </div>
    );
  }
}

export default ActivityDetail;