import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      preview: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  render () {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'cente', width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
          <textarea id="editor" onChange={this.handleChange} value={this.state.text} style={{backgroundColor: 'grey'}}>

          </textarea >
          <div id="preview" style={{backgroundColor: 'grey', width: '400px'}}>
            <p>Hello</p>
          </div>
        </div>
    );
  }
}

export default App;