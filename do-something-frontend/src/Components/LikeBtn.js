import React, { Component } from 'react';

class LikeBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Like</button> { this.state.likes}
      </>
    );
  }
}

export default LikeBtn;