import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickDown = this.handleClickDown.bind(this)
  }
  handleClick(event){
    console.log('hello')
    this.setState((prevState) => ({counter: prevState.counter + 1}))
  }
  handleClickDown(event){
    console.log('oh no')
    this.setState((prevState) => ({counter: prevState.counter - 1}))
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Please Touch Me</button>
        <button onClick={this.handleClickDown}>Don't Touch Me</button>
      </div>
    )
  }
}