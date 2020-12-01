import React from 'react';

const ListHeader = (props) => {
  return (
    <div>
      <h1>
        There is {props.numItems} things you can do!
      </h1>
    </div>
  );
};

export default ListHeader;