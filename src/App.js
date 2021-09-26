import React from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: true

    }
  }
  toggleModal = () =>{
    (this.state.showModal) ? this.setState({showModal:false}) : this.setState({showModal:true});
  }
  render(){
  return (
    <>
    
    <Header />
    <Main toggleModal={this.toggleModal} />
    <Footer />
    <Modal show={this.state.showModal} onHide={this.toggleModal}>
        <Modal.Header>
          <Modal.Title>You Like This Beast?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggleModal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
  }
}

export default App;
