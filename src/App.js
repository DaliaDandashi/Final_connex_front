import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Routers from './components/Routers';
import { withRouter } from 'react-router-dom';



// import Footer from './components/footer';





function App() {
  return (

    <Fragment>
      <Navbar />
      <Routers />
      
    </Fragment>


  );
}

export default withRouter(App);

