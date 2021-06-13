import React, { Component } from 'react';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Main from './componenets/Main';
import JsonGivenData from './componenets/data.json';
import SelectedBeast from './componenets/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props){
    console.log(props);
	  super(props);
	  this.state = {
      show: false,
      SelectedProps: {},
	  allBeasts: JsonGivenData,
	  };
  };
	
	gettingTheModal = (previosProps) => {
		  this.setState({
	    show:!this.state.show,
	    SelectedProps: previosProps,
		  });
	}

	closingTheModal = () => {
	  this.setState({
	    show: false,
	  });
	}

	updateAllBeasts=(allBeasts)=>{
	  this.setState({allBeasts});
	  }

	render() {
	  return (
	      <div>
	        <Header />
	        <Main 
			  showingResultsBasedOnTheForm={this.showingResultsBasedOnTheForm}
	          JsonGivenData={JsonGivenData}
			  gettingTheModal={this.gettingTheModal}
			  SelectedProps={this.state.SelectedProps}
			  updateAllBeasts={this.updateAllBeasts}
			  allBeasts={this.state.allBeasts}
	        />
	        <SelectedBeast
	          show={this.state.show}
			  closingTheModal={this.closingTheModal}
	          SelectedProps={this.state.SelectedProps}
	        />
	        <Footer />
	      </div>
	    );
	  }
}

export default App;
