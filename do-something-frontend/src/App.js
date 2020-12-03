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

  async fetchData() {
    const url = 'http://www.boredapi.com/api/activity/'
    const response = await fetch(url);
    const data = await response.json();
    const activity = { activity: data.activity, type: data.type }
    this.props.fetchData(activity)
  }

  handleSave = () => {
    // something weird going on here
    this.props.postData({
      name:this.props.activity,
      type_name: this.props.type
    })
    this.props.fetchList()
    this.props.fetchList()
    this.fetchData()
  }

  handleClick = () => {
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
    this.props.fetchList()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path='/' render={props => <Home {...props} clickProp={this.handleClick} saveProp={this.handleSave}/>} />
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

const actions = {fetchData, fetchList, postData}
export default connect(mapStateToProps, actions)(App);