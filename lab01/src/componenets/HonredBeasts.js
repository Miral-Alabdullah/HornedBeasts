import React from 'react';

class HornedBeasts extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			vote: 0
		}
	}

	requestVoting = () => {
		let tempVote = this.state.vote;
		this.setState({
			vote: tempVote+=1
		})
	}

  render() {
	return(
		<div>
			<div>
			<h1>{this.props.title}</h1>
			<img src={this.props.imageUrl} alt={this.props.title} onClick={this.requestVoting}/>
			<p>{this.props.description}</p>
			<p>Vote: {this.state.vote}</p>

			</div>
		</div>
	);
}
}
export default HornedBeasts;
