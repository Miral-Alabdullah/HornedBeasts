import React from 'react';
import HornedBeasts from './HonredBeasts';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import JsonGivenData from './data.json';

class Main extends React.Component {


	rederingTheItems = (e) => {
	  console.log(this.gallery);
	  const shortcutVar = Number(e.target.value);
	  let gallery = JsonGivenData;
	  if(shortcutVar) {
	    gallery = JsonGivenData.filter((value) =>value.horns === shortcutVar);
	  }
	    this.props.updateAllBeasts(gallery);
	};

	render() {
	  return (
	    <div>
	      <Container className="p-3">
	        <Form.Control as="select" defaultValue="0" onChange={this.rederingTheItems}>
	          <option value="0">All</option>
	          <option value="1">One Horn</option>
	          <option value="2">Two Horns</option>
	          <option value="3">Three Horns</option>
	          <option value="100">More Than Three</option>
	        </Form.Control>
	      </Container>
	      {
	        this.props.allBeasts.map((beast, index) => (
	            <HornedBeasts
				  key={index}
				  index={index}
	              title={beast.title}
	              imageUrl={beast.image_url}
	              description={beast.description}
	              horns={beast.horns}
	              gettingTheModal={this.props.gettingTheModal}
	            />
	        ),
	        )
	      }
	    </div>
	  );
	}
}

export default Main;
