import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

class UploadContentComponent extends React.Component {
  constructor (props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChangeType = this.handleOnChangeType.bind(this)

    this.state = {
      content: {
        type: 'photo',
        hashtags: [],
        tagged_users: [],
        like_count: 0,
        comment_count: 0,
      },
    }
  }

  handleOnChange(e) {
    e.preventDefault()
    const content = Object.assign({}, this.state.content, { [e.target.name]: e.target.value })
    this.setState({ content })
  }

  handleOnChangeType(type) {
    const content = Object.assign({}, this.state.content, { type })
    this.setState({ content })
  }

  handleSubmit (e) {
    e.preventDefault();
    const content = this.state.content;
    content.hashtags = content.hashtags.split(',');
    content.tagged_users = content.tagged_users.split(',');
    content.creation_date = new Date().toISOString();
    this.props.handleSubmit(this.state.content)
  }

  render () {
    return (
      <div>
        <header className="App-header" style={{ height: 'fit-content' }}>
          <h1 className="App-title">Upload content</h1>
        </header>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <legend className="col-form-label col-sm-2">Type</legend>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="type"
                      onChange={() => this.handleOnChangeType('photo')}/>{' '}
                    Photo
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="type"
                      onChange={() => this.handleOnChangeType('video')} />{' '}
                    Video
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="content_url" sm={2}>Content Url</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} name="content_url" id="content_url" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="geo_lat" sm={2}>Geo Lat</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} name="geo_lat" id="geo_lat" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="geo_lng" sm={2}>Geo Lng</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} name="geo_lng" id="geo_lng" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="like_count" sm={2}>Likes</Label>
              <Col sm={10}>
                <Input type="number" min="0" onChange={this.handleOnChange} name="like_count" id="like_count" value={this.state.content.like_count} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="comment_count" sm={2}>Comments</Label>
              <Col sm={10}>
                <Input type="number" min="0" onChange={this.handleOnChange} name="comment_count" id="comment_count" value={this.state.content.comment_count} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="hashtags" sm={2}>Hashtags *</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} name="hashtags" id="hashtags" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tagged_users" sm={2}>Tagged users *</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} name="tagged_users" id="tagged_users" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>Description</Label>
              <Col sm={10}>
                <Input onChange={this.handleOnChange} type="textarea" name="description" placeholder="Description..." />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
        <div>* comma separated</div>
        <h5>------------------------------------------------</h5>
          <button style={{ margin: '10px' }} onClick={e => {
            e.preventDefault();
            window.location.href = `${window.location.href}content`
          }}>
            Show Content
          </button>
      </div>
    )
  }
}

export default UploadContentComponent