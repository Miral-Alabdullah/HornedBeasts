import React from 'react';

class HornedBeasts extends React.Component {
  render() {
	return(
		<div>
			<div>
			<h1>{this.props.title}</h1>
			<img src={this.props.imageUrl} title={this.props.title}/>
			<p>{this.props.description}</p>
			</div>
		</div>
	);
}
}
export default HornedBeasts;
