import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
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
