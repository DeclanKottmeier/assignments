import React, { Component } from 'react';
import Comment from "./Comment";

class App extends Component {
  render() {
    const user = {
      image: 'https://assets.time.com/assets/desktop-loop-poster.jpg',
      text: 'This is a comment',
      date: 'June 26, 2018'
    }
    return (
      <div>
        <Comment user={user} />
      </div>
    );
  }
}

export default App;
