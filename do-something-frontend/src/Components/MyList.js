import React from 'react';

const MyList = (props) => {
  let list = props.listProp.map(item => <li key={item.id}>{item.name}</li>)
  return (
    <div>
      <h1>My List</h1>
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default MyList;