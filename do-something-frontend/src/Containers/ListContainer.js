import React, { Component } from 'react';
import MyList from '../Components/MyList'
import ActivityDetail from '../Components/ActivityDetail'
import { Route } from 'react-router-dom'

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type_name: '',
    }
  }

  async fetchActivity(id) {
    const url = `http://localhost:3001/activities/${id}`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      name: data.name,
      type_name: data.type_name
    })
  }
  
  render() {
    return (
      <div>
          <Route exact path='/activities' render={props => <MyList {...props} listProp={this.props.listProp} numItems={this.props.numItems}/>} />
          <Route exact path='/activities/:id' render={props => <ActivityDetail {...props} fetchActivity={this.fetchActivity.bind(this)} nameProp={this.state.name} typeProp={this.state.type_name}/>} />
      </div>
    );
  }
}

export default ListContainer;
