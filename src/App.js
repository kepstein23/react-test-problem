import React from 'react';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      clickMe: true,
      buttonText: "click me"
    };
    this.handleClickMe = this.handleClickMe.bind(this);
  }

  


  //handler goes here
  handleClickMe() {
    if (this.state.clickMe) {
      this.setState({buttonText: "thanks"});
      this.setState({clickMe: false});
    } else {
      this.setState({buttonText: "click me"});
      this.setState({clickMe: true});
    }
    console.log(this.state.clickMe);
    console.log(this.state.buttonText);
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button type="submit" onClick={this.handleClickMe}>{this.state.buttonText}</button>
      </div>
    );
  }
}