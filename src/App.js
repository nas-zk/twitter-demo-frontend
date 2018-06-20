import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";
import GlobalNav from "./globalNav";
import ProfileNav from "./profileNav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Helmet>
            <title>Twitter Demo App</title>
            <meta name="description" content="Twitter Demo App" />
          </Helmet>
          <GlobalNav />
          <ProfileNav />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
