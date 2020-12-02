import React, { Component } from 'react';
import Home from './Components/Home'
import Nav from './Components/Nav'
import ListContainer from './Containers/ListContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import fetchData from './actions/fetchData'
import fetchList from './actions/fetchList'
import postData from './actions/postData'
import './App.css'

class App extends Component {
  // state = {
  //   activity: '',
  //   type: '',
  //   list: [],
  // }

  async fetchData() {
    const url = 'http://www.boredapi.com/api/activity/'
    const response = await fetch(url);
    const data = await response.json();
    const activity = { activity: data.activity, type: data.type }
    // const action = {type: "FETCH_DATA", payload: activity }
    this.props.fetchData(activity)
    // this.setState({
    //   activity: data.activity,
    //   type: data.type
    // })
  }

  async fetchActivities() {
    const url = 'http://localhost:3001/activities'
    const response = await fetch(url);
    const data = await response.json();
    const list = { list: data }
    this.props.fetchList(list)

    // this.props.fetchActivities(list)
    // this.setState({
    //   list: data
    // })
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
        name: this.props.activity,
        type_name: this.props.type,
      })
    }
    const response = await fetch(url, config)
    const data = await response.json()
    const activity = { activity: data.name, type: data.type_name }
    this.props.postData(activity)
    alert('Saved')
    // this.setState({
    //   list: [...this.props.list, data]
    // })
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
          <Route exact path='/' render={props => <Home {...props} activityProp={this.props.activity} clickProp={this.handleClick} saveProp={this.handleSave}/>} />
          <Route exact path='/activities' render={props => <ListContainer {...props} numItems={this.props.list.length} listProp={this.props.list}/>} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activity,
    type: state.type,
    list: state.list
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: (activity) => dispatch({type: "FETCH_DATA", payload: activity })
//   }
// }
const actions = {fetchData, fetchList, postData}
export default connect(mapStateToProps, actions)(App);