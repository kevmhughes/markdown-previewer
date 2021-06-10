/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
import React from 'react';
import marked from 'marked';
import { sampleText } from './sampleText';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: sampleText,
    };
  }

  componentDidMount() {
    const text = localStorage.getItem('text');
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText });
    }
  }

  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem('text', text);
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  renderText = (text) => {
    const __html = marked(text, {
      sanitize: true, breaks: true, gfm: true, highlight: null,
    });
    return { __html };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              id="editor"
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35"
            />
          </div>
          <div className="col-sm-6">
            <div id="preview" dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
