import React, { Component } from 'react';
import './App.css';
import  Modal  from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/NameCard/NameCard';
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
            progress={90}
            striped={true}
            animated={true} 
            state="success"/>
        <NameCard
            name="Fanney Þóra Vilhjálmsdóttir"
            email="fanneyv12@ru.is"
            telephone="+354-866-5544"
            imageUrl="https://images7.alphacoders.com/633/thumb-350-633262.png"/>

      </div>

    );
  }
}

export default App;
