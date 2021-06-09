import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {
  render () {
    return (
      <Card>
        <Card.Body class="p-3 mb-2 bg-dark text-white">
          <Card.Text>Gallery Of Horns.</Card.Text>
        </Card.Body>
      </Card>
    );}
}

export default Header;
