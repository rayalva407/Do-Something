import React from 'react';
import ListHeader from './ListHeader';
import {NavLink} from 'react-router-dom'

const MyList = (props) => {
  let list = props.listProp.map(item => <li className="listItem" key={item.id}><NavLink style={{ color: 'white' }} to={`activities/${item.id}`}>{item.name}</NavLink></li>)
  return (
    <div>
      <ListHeader numItems={props.numItems}/>
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default MyList;