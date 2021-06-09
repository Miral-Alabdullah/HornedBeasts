import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';


export class SelectedBeast extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    };
  }

	gettingTheModal = () => {
	  this.setState({show:!this.state.show});
	}
	render() {
	  return ( 
	    <div>

	      <Modal show={this.show} onHide={} animation={false}>
	        <Modal.Header closeButton>
	          <Modal.Title>Modal heading</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={}>
            Close
	          </Button>
	          <Button variant="primary" onClick={}>
            Save Changes
	          </Button>
	        </Modal.Footer>
	      </Modal>
	    </div>
	  );
	}
}

export default SelectedBeast;




//   constructor (props){
//     super(props);
//     this.state={
//       show: false,
//     };
//   }

//   showingModal = () => {
// 	  this.props.gettingTheModal();
//   }
