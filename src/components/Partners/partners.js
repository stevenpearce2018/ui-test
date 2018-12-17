import React, { Component } from 'react';
import './partners.css';

class Partners extends Component {
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
          <p>Not sure what to put for Partners, so here's the a dog:</p>
          <img height="320" src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </div>
      </div>
    );
  }
}

export default Partners;
