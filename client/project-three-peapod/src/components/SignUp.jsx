import React, { Component } from "react";
// import './SignUp.css'
import { signUp, signIn } from "../services/user";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isError: false,
      errorMsg: "",
    };
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: "",
    });

  onSignUp = (event) => {
    event.preventDefault();

    const { history, setUser } = this.props;

    signUp(this.state)
      .then(() => signIn(this.state))
      .then((res) => setUser(res.user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        this.setState({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="continue">
          Continue
        </button>
      );
    }
  };

  render() {
    const { email, username, password, passwordConfirmation } = this.state;
    console.log(this.props)
    return (
      <div className="form-container">
        <h3>Create Account</h3>
        <form onSubmit={this.onSignUp} className="form">
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={this.handleChange}
          />
          <label>Email address</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <label className="contain">
            Must Contain:
            <p>8 characters</p>
            <p>Numbers, lowercase & uppercase </p>
          </label>
          <label>Password Confirmation</label>
          <input
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          {this.renderError()}
        </form>
      </div>
    );
  }
}

export default SignUp;
