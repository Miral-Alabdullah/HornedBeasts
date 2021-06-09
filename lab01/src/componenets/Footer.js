import react from 'react';
import Card from 'react-bootstrap/Card';

class Footer extends react.Component {
  render() {
    const myName = 'Miral';
    return (
      <Card>
        <Card.Body class="p-3 mb-2 bg-dark text-white">
          <Card.Text>&#169; This web page application has done by {myName}.</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
