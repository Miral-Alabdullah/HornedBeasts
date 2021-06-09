import React from 'react';
import HornedBeasts from './HonredBeasts';
import JsonGivenData from './data.json';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
		
    };
  }
  render() {

    return (
      <div>
        {
          JsonGivenData.map((beast)=> {
            return (
              <HornedBeasts
                title = {beast.title}
                imageUrl = {beast.image_url}
                description = {beast.description}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Main;
