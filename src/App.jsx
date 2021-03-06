import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      showBlock: false
    }
  }

  setModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={()=>this.setState(prevState=> ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br/>

        <Transition in={this.state.showBlock} timeout={300}>
          {state=> <div style={{backgroundColor: 'red', width: 100, height: 100, margin: 'auto', opacity: state === 'exited' ? 0 : 1}}></div>}
          
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.setModal}/>
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.setModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
