import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{
    render(){
      console.log(this.props);
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title >{this.props.selectedBeast.title}</Modal.Title>
              <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} 
              style= {{width:'300px'}}/>
            </Modal.Header>
            <Modal.Body >{this.props.selectedBeast.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" >
                Close
              </Button>
              <Button variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default SelectedBeast;