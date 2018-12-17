import React, { Component } from 'react';
import './App.css';
import Audiences from './components/Audiences/audiences';
import Brands from './components/Brands/brands';
import Partners from './components/Partners/partners';

// I might have a menu like this in it's own component that would I would pass a function too with props and that would call a function on the parent component.
// This seemed like a bit too much like overkill for this small demo though.

// Fade in article I used: https://tech.gadventures.com/simple-react-transitions-a5f6bbb680a9

// I wouldn't use h2s without using an H1 first because of SEO/screen readers

const MenuOption = props => <div onClick={props.onClick} className={props.currentMenuIndex ? "active" : "inactive"}>{props.name}</div>;
const MenuOptions = [ <Audiences/> , <Brands/>, <Partners/>];

const setAllIndexAsTrue = (array, selectedIndex) => {
  for(let i = 0; i < array.length; ++i) i !== selectedIndex ? array[i] = false : array[i] = true;
  return array;
}

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentMenuIndex: [true, false, false],
        mainContent: MenuOptions[0],
        didMount: false
    };
    this.setActive = this.setActive.bind(this)
  }
  
  componentDidMount = () => setTimeout(() => this.setState({didMount: true}), 0);

  // The Menu changes the main content based on whatever index is currently set to true
  // You can add more menu options by adding components to the MenuOptions constant
  // You can add more menu tabs by using the menuoption functional component

  setActive = i => this.setState({currentMenuIndex: setAllIndexAsTrue(this.state.currentMenuIndex, i), mainContent: MenuOptions[i]});

  render () {
    const {didMount} = this.state;
    return (
        <div className="home">
          <div className="menu">
            {/* Would not have this spacing if given more time. It's to add spacing between menu items and keep the underline.
                It's very hacky.
            */}
              <div className={`fade-in ${didMount && 'visible'}`}>
                <MenuOption name="Audiences     " currentMenuIndex={this.state.currentMenuIndex[0]} onClick={ () => this.setActive(0)}/>
                <MenuOption name="Partners     "  currentMenuIndex={this.state.currentMenuIndex[1]} onClick={ () => this.setActive(1)}/>
                <MenuOption name="Brands     "    currentMenuIndex={this.state.currentMenuIndex[2]} onClick={ () => this.setActive(2)}/>
              </div>
            </div>
            <div className={`fade-in ${didMount && 'visible'}`}>
                {this.state.mainContent}
            </div>
        </div>
    )
  }
}

export default App;
``