import React, { Component } from 'react'
import { login } from '../services/auth';
import {Link} from 'react-router-dom';

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log('STEP 1', this.state)
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: ''
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user)
          this.props.setUser(user);
          this.props.history.push('/');
        }
      })
  }
  render() {
    return (
      <section  className="container-auth p-2" >
      <div>
         <h1 class="large text-primary">Sign In</h1>
         <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
        <form class="form profile-top auth" s onSubmit={this.handleSubmit}>
          <label htmlFor="username"></label>
          <input
            className="form-group" 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
            placeholder="Username"
          />
          <label htmlFor="password"></label>
          <input
            className="form-group" 
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            placeholder="Password"
          />
          <button  className="btn btn-primary" type="submit">Login</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
      
        <p class="my-3">
        Don't have an account?
        <Link to="/signup" className=" text-dark"> Signup </Link>
      </p>
      </div>
      </section>
    )
  }
}


/* 

 <div class="alert alert-danger">
        Invalid credentials
      </div>
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
      <form class="form" action="dashboard.html">
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>

*/ 