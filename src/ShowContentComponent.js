import React from 'react'
import axios from 'axios'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

class ShowContentComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contents: [],
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/content')
    .then(response => {
      console.log(response.data)
      this.setState({
        contents: response.data,
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render () {
    console.log(this.state.contents);
    return (
      <div>
        <header className="App-header" style={{ height: 'fit-content' }}>
          <h1 className="App-title">Show contents</h1>
        </header>
        <div>
          {this.state.contents.map((content, i) => {
            console.log(content)
            return (
              <div key={content._id}>
                <h5>------------------------------------------------</h5>
                {content.type === 'photo' && (
                  <img src={content.content_url} height="200" width="200"/>
                )}
                {content.type === 'video' && (
                  <iframe width="420" height="315" frameBorder="0" allowFullScreen
                    src={content.content_url}>
                  </iframe>
                )}
                <div>
                  {content.hashtags.map(tag => {
                    return(
                      <a href="#" style={{ marginLeft: '5px' }}>{` #${tag.trim()}`}</a>
                    )
                  })}
                </div>
                <div>
                  <div>Tagged Users</div>
                  {content.tagged_users.map(tag => {
                    return(
                      <a href="#" style={{ marginLeft: '5px' }}>{` ${tag.trim()}`}</a>
                    )
                  })}
                </div>
                <div>
                  {content.description}
                </div>
                <div>
                  Created: {content.creation_date}
                </div>
                <div>
                  {content.like_count} likes
                </div>
                <div>
                  {content.comment_count} comments
                </div>
                <div>
                  LAT: {content.geo_lat}
                <div>
                </div>
                  LNG: {content.geo_lng}
                </div>
              </div>
            )
          })}
          <h5>------------------------------------------------</h5>
          <button style={{ margin: '10px' }} onClick={e => {
            e.preventDefault();
            window.location.href = window.location.href.split('/content')[0]
          }}>
            Add Content
          </button>
        </div>
      </div>
    )
  }
}

export default ShowContentComponent