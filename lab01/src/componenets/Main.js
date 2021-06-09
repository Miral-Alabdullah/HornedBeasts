import React from 'react';
import HornedBeasts from './HonredBeasts';

class Main extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.JsonGivenData.map((beast)=> {
            return (
              <HornedBeasts
                title = {beast.title}
                imageUrl = {beast.image_url}
                description = {beast.description}
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
