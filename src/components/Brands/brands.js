import React, { Component } from 'react';
import './brands.css';

class Brands extends Component {
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
          <p>Not sure what to put for Brands, so here's the eiffel tower:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/240px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"></img>
        </div>
      </div>
    );
  }
}

export default Brands