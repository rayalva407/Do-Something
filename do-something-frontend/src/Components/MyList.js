import React from 'react';
import ListHeader from './ListHeader';
import {Link} from 'react-router-dom'

const MyList = (props) => {
  let list = props.listProp.map(item => <li key={item.id}><Link to={`activities/${item.id}`}>{item.name}</Link></li>)
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