import React, { Component } from 'react';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
          <textarea id="editor" className="form-control" rows="35" />

            <div id="preview">
            <p>Hello</p>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;