import React, { Component } from 'react';
import './App.css';
import  Modal  from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

  render() {
    return (
      <div className="App">
        {!this.state.isOpen && <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>}
        <Modal
            isOpen={this.state.isOpen}
            onClose={() => this.setState({isOpen: false})}>
            <Modal.Title>My Modal Title</Modal.Title>
            <Modal.Body> My Modal Body</Modal.Body>
            <Modal.Footer> My Modal Footer</Modal.Footer>
        </Modal>
        <ProgressBar
            progress={50}
            striped={true}
            animated={true} />
      </div>
    );
  }
}

export default App;
