import React from "react";

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      };
    });
  }
  render() {
    return (
      <>
        <button className="btn-like" onClick={this.handleClick}>
          <i className="fas fa-heart"></i>
        </button>
        <span>{this.state.likes} {<small>Likes</small>}</span>
      </>
    );
  }
}
export default LikeBtn;
