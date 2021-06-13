import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';

export class SelectedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedItem: this.props.SelectedProps,
	  closingTheModal: this.props.closingTheModal,
    };
  }
  
  render() {
	  console.log(this.props.SelectedProps);
	  return ( 
	    <div>
        <Modal show={this.props.show}>
          <Modal.Header>
			  <Modal.Title>{this.state.SelectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.SelectedProps.imageUrl} alt={this.state.SelectedItem.title} width='100%'/>
		  <p>{this.state.SelectedItem.description}</p>
		  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.state.closingTheModal}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
	    </div>
	  );
  }
}

export default SelectedBeast;




