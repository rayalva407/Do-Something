import React from 'react';

async fetchActivites() {
  const url = 'http://localhost:3001/activities'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}

const MyList = () => {
  return (
    <div>
      <h1>My List</h1>
    </div>
  );
};

export default MyList;