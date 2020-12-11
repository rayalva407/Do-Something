import React from 'react';

const ListHeader = (props) => {
  return (
    <>
      <h1>
        There is {props.numItems} things you can do!
      </h1>
    </>
  );
};

export default ListHeader;