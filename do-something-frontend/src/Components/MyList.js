import React from 'react';
import ListHeader from './ListHeader';

const MyList = (props) => {
  let list = props.listProp.map(item => <li key={item.id}>{item.name}</li>)
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