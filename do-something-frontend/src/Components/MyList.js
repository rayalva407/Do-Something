import React from 'react';
import ListHeader from './ListHeader';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const MyList = (props) => {
  let list = props.list.map(item => <li className="listItem" key={item.id}><NavLink style={{ color: 'white' }} to={`activities/${item.id}`}>{item.name}</NavLink></li>)
  return (
    <div>
      <ListHeader numItems={props.list.length}/>
      <ul>
        {list}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(MyList);