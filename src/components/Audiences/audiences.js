import React, { Component } from 'react';
import './audiences.css';

class Audiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false
    };
  }
  
  componentDidMount = () => setTimeout(() => this.setState({didMount: true}), 0);
  
  render() {
    const {didMount} = this.state;
    return (
      <div>
        <div className={`fade-in ${didMount && 'visible'}`}>
          <p>Not sure what to put for Audiences, so here's a poorly drawn elephant:</p>
          <img src="https://cdn.drawception.com/images/panels/2012/5-10/Da6D3ZgdER-8.png"></img>
        </div>
      </div>
    );
  }
}

export default Audiences