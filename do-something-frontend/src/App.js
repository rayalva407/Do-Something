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
    type: ''
  }

  handleClick = () => {
    this.fetchData()
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

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path='/' render={props => <Home {...props} activityProp={this.state.activity} clickProp={this.handleClick}/>} />
          <Route exact path='/mylist' component={MyList} />
          <Route exact path='/activity/:id' component={ActivityDetail} />
        </Router>
      </div>
    );
  }
}

export default App;