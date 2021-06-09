import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vote: 0,
    };
  }

	requestVoting = () => {
	  let tempVote = this.state.vote;
	  this.setState({
	    vote: tempVote+=1,
	  });
	  this.props.gettingTheModal();
	}


	render() {
	  return(
	  <div class="w-100 p-3">
		  <Card style={{ width: '18rem' }}>
	        <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.requestVoting} />
	        <Card.Body class="p-3 mb-2 bg-dark text-white">
	          <Card.Title>{this.props.title}</Card.Title>
	          <Card.Text>{this.props.description}</Card.Text>
			  <Card.Text> &hearts; {this.state.vote}</Card.Text>
	        </Card.Body>
	      </Card>
	   </div> 
	  );
	}
}
export default HornedBeasts;


// this.requestVoting