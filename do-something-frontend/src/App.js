import React, { Component } from 'react';
import Home from './Components/Home'
import Nav from './Components/Nav'
import MyList from './Components/MyList'
import './App.css'

class App extends Component {
  state = {
    activity: ''
  }

  handleClick = () => {
    this.fetchData()
  }

  async fetchData() {
    const url = 'http://www.boredapi.com/api/activity/'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      activity: data.activity
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home activityProp={this.state.activity} clickProp={this.handleClick}/>
        <MyList />
      </div>
    );
  }
}

export default App;