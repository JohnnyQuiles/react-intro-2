import React, { Component } from 'react';
import './App.css';

export class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    };
  };
  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };
  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleOnClick = (event) => {
    // console.log(this.state.lastName);
  };
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <div>
        {console.log(this.state)}
        <label htmlFor="email">Email:</label>
        <input name="email" type={this.state.email} onChange={this.handleInput}></input>
        {/* <p>{this.state.email}</p> */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" value={this.state.firstName} onChange={this.handleFirstName} />
          <button>Submit</button>
        </form>

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" value={this.state.lastName} onChange={this.handleLastName} />
        <button onClick={this.handleOnClick}>Submit</button>

        <form>
          <input name="email" value={this.state.email} onChange={this.handleOnChange} />
          <input name="firstName" value={this.state.firstName} onChange={this.handleOnChange} /> 
          <input name="lastName" value={this.state.lastName} onChange={this.handleOnChange} />
        </form>
      </div>
    ); 
  };
};
export default AppInput;

