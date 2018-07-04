import React, { Component } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';
import UploadContentComponent from './UploadContentComponent'
import ShowContentComponent from './ShowContentComponent'

class App extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {}
  }

  handleSubmit(content) {
    console.log(content);
    axios.post(
      'http://localhost:3001/insert_content',
      content,
    )
    .then(function (response) {
      alert('Upload successfull!', content);
      window.location.href = `${window.location.href}content`
    })
    .catch(function (error) {
      alert('Something went wrong... :(')
      console.log(error);
    });
  }

  render() {
    const route = window.location.href
    const showContent = route.includes('/content')

    return (
      <div className="App">
        {!showContent && (<UploadContentComponent handleSubmit={this.handleSubmit} />)}
        {showContent && (<ShowContentComponent />)}
      </div>
    );
  }
}

export default App;
