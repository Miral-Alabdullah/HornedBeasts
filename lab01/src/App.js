import React from 'react';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Main from './componenets/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

