import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import LikeBtn from './LikeBtn'

class SearchForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })

  }



  render() {
    let newList = this.props.listProp.filter(item => 
      item.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
      item.type_name.toLowerCase().includes(this.state.search.toLowerCase())
    )

    let renderList = newList.map(item => (
      <li className="listItem" key={item.id}>
        <NavLink style={{ color: 'white' }} to={`activities/${item.id}`}>
          {item.name}
        </NavLink>
        <LikeBtn />
      </li>
    ))
    console.log(this.props.listProp)

    return (
    <>
      <label>Search: </label>
      <input type="text" name='search' onChange={this.handleChange}/>
      <ul>
        {renderList}
      </ul>
    </>
    )
  }
}

export default SearchForm