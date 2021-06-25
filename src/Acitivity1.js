import React from "react";
// add a state to this component
// state should have a property called 'isLoggedIn' which is boolean
//(true if logged in, false if not )
// Then give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out
// Use React.DOM to render the component to an index page

export default class Login extends React.Component {
  constructor() {
    super();
    // Add this.state here
    this.state = { isLoggedIn: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    // Use a conditional statement to this.state here and display the variable in the <h1> below
    let message;
    if (this.state.isLoggedIn) message = 'in';
    else message = 'out';
    return <div>
      <h1 onClick={this.clickHandler}>You are currently logged {message}. </h1>
    </div>;
  }
}
