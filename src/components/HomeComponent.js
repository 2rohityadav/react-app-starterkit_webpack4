import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import UsersComponent from "././container/UsersComponent";
import FooterComponent from "./FooterComponent";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <p>Home Component!</p>

        <HeaderComponent />
        <UsersComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default HomeComponent;
