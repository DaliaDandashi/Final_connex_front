import React, { Fragment } from 'react';
// import Navbar from './components/Navbar';
import Routers from './components/Routers';
import { withRouter } from 'react-router-dom';
import SessionProvider from './components/session/SessionProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//  import Footer from './components/footer/Footer';


function App(props) {
  return (
    <SessionProvider>
      <Fragment>
        {/* <Navbar /> */}
        <Routers {...props} />
        <ToastContainer />
        {/* <Footer/> */}
      </Fragment>
    </SessionProvider>

  );
}

export default withRouter(App);

