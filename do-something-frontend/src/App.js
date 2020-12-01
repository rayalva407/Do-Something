import React, { Component } from 'react';
import Home from './Components/Home'
import Nav from './Components/Nav'
import MyList from './Components/MyList'
import ActivityDetail from './Components/ActivityDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  state = {
    activity: '',
    type: '',
    list: []
  }

  async fetchData() {
    const url = 'http://www.boredapi.com/api/activity/'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      activity: data.activity,
      type: data.type
    })
  }

  async fetchActivities() {
    const url = 'http://localhost:3001/activities'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      list: data
    })
  }

  async postData() {
    const url = 'http://localhost:3001/activities'
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.activity,
        type_name: this.state.type
      })
    }
    const response = await fetch(url, config)
    const data = await response.json()
    this.setState({
      list: [...this.state.list, data]
    })
  }

  handleSave = () => {
    this.postData()
  }

  handleClick = () => {
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
    this.fetchActivities()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path='/' render={props => <Home {...props} activityProp={this.state.activity} clickProp={this.handleClick} saveProp={this.handleSave}/>} />
          <Route exact path='/mylist' render={props => <MyList {...props} listProp={this.state.list}/>} />
          <Route exact path='/activity/:id' component={ActivityDetail} />
        </Router>
      </div>
    );
  }
}

export default App;