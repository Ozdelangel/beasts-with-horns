import React from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast'

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import data from './data.json';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      beastData: data

    }
  }
  displayAsModal = (name) =>{
    const selectedBeast = data.find(beast => beast.title === name);
    console.log('appsselectedbeast: ', selectedBeast, name);
    this.setState({selectedBeast, showModal: true});
  }
  handleClose = () => this.setState({showModal: false});
  render(){
  return (
    <>
    
    <Main 
    beastData={this.state.beastData}
    displayAsModal={this.displayAsModal}
    />
    <SelectedBeast selectedBeast={this.state.selectedBeast} handleClose={this.handleClose}
    showModal={this.state.showModal} />
    <Header />
    
    <Footer />
   
    </>
  );
  }
}

export default App;
