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
      //   SelectedProps: {},
      SelectedTitleBeast: '',
      SelectedImgBeast: '',
      SelectedDescBeast: '',
	  };
  };
	
	gettingTheModal = (title,imageUrl,description) => {
		  this.setState({
	    show:!this.state.show,
	    // SelectedProps: previosProps,
	    SelectedTitleBeast: title,
	    SelectedImgBeast: imageUrl,
	    SelectedDescBeast: description,
		  });
	}

	render() {
	  return (
	      <div>
	        <Header />
	        <Main 
	          JsonGivenData={JsonGivenData}
			  gettingTheModal={this.gettingTheModal}
	        />
	        <SelectedBeast
	          show={this.state.show}
	        //   SelectedProps={this.state.SelectedProps}
	        title={this.state.SelectedTitleBeast}
	        imageUrl={this.state.SelectedImgBeast}
	        description={this.state.SelectedDescBeast}
	        />
	        <Footer />
	      </div>
	    );
	  }
}

export default App;
