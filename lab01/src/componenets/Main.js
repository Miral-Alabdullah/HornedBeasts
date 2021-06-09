import React from 'react';
import HornedBeasts from './HonredBeasts';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import JsonGivenData from './data.json';

class Main extends React.Component {


	rederingTheItems = (e) => {
	  console.log(e.target.value);
	  let shortcutVar = e.target.value;
	  let showingResults;
	  if(shortcutVar) {
	    showingResults = JsonGivenData.filter((value) => {
	      if (value.horns === shortcutVar) {
	        return value;
	      }
	      return showingResults;
	    });
	  } else {
	    showingResults = JsonGivenData;
	  }
	  this.props.showingResultsBasedOnTheForm(showingResults);
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
	          <option value="more">More Than Three</option>
	        </Form.Control>
	      </Container>
	      {
	        this.props.JsonGivenData.map((beast) => {
	          return (
	            <HornedBeasts
	              title={beast.title}
	              imageUrl={beast.image_url}
	              description={beast.description}
	              horns={beast.horns}
	              gettingTheModal={this.props.gettingTheModal}
	              Selected={this.props.Selected}
	            />
	          );
	        })
	      }
	    </div>
	  );
	}
}

export default Main;
