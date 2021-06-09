import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export class SelectedBeast extends Component {
	
  render() {
	  console.log(this.props.title);
	  return ( 
	    <div>
	      <Modal show={this.props.show}>
	        <Modal.Header >
	          <Modal.Title>{this.props.title}</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
            <Card.Img variant="top" src={this.props.imageUrl} height='250em' />
            <p>{this.props.description}</p>
          </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={this.gettingTheModal}>
				  Close
	          </Button>
	        </Modal.Footer>
	      </Modal>
	    </div>
	  );
  }
}

export default SelectedBeast;




