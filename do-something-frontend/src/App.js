import React, { Component } from 'react';
import Activity from './Components/Activity'
import './App.css';

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
      <div>
        <Activity act={this.state.activity} click={this.handleClick}/>
      </div>
    );
  }
}

export default App;