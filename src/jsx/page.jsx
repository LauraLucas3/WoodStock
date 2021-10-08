import React from 'react';
import Accueil from './accueil';
import Articles from './articles';
import Team from './team';
import ContactUs from './contactus';
import Footer from './footer';

class Page extends React.Component {
    render() {
      return (
        <div>
          <Accueil />
          <Articles />
          <Team />
          <ContactUs />
          <Footer />
        </div>
      )
    }
  }

  export default Page;