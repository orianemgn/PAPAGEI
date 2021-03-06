import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    message: '',
    name:'',
    nativeLanguages: '', 
    learningLanguages: [],
    location: '', 
    age: 0, 
    description: '', 
    goal: '' 

  }

  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


   handleNumber = event => {
    let value = event.target.value;
    this.setState({
        age : value
     })
 }



  handleSubmit = event => {
    event.preventDefault();
    const { username, password, name, nativeLanguages, learningLanguages, location, age, description, goal} = this.state;
    signup(username, password, name, nativeLanguages, learningLanguages, location, age, description, goal)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: '',
            message: '',
            name:'',
            nativeLanguages:'',
            learningLanguages: [],
            location: '', 
            age: 0, 
            description: '', 
            goal: '' 
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
      <div className="form-group" >
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
        <form className="form profile-top" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            className="form-group" 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
            placeholder="Username"
          />
          <label htmlFor="password">Password: </label>
          <input
             className="form-group" 
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            placeholder="password"
          />



          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            placeholder="name"
          />



          <label htmlFor="nativeLanguages">Choose a native language:</label>
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}>

          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
        
          </select>


          <label htmlFor="learningLanguages">Choose a learning language:</label>
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} multiple>

          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
          <option value="spanish">Spanish</option>
          </select>
        {/* languages
        location */}
          <label htmlFor="location">Choose a city:</label>
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option value="berlin">Berlin</option>
          <option value="hambourg">Hambourg</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          </select>

        <label htmlFor="age">Age: </label>
          <input
             className="form-group" 
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handleNumber}
            id="age"

            min="16"
             max="100"
          />


          {/* gender */}

          <label htmlFor="description">Description: </label>
          <input
             className="form-group" 
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
            placeholder="write something about you..."
          />
          <label htmlFor="goal">Learning goals: </label>
          <input
            className="form-group" 
            type="text"
            name="goal"
            value={this.state.goal}
            onChange={this.handleChange}
            id="goal"
            placeholder="my learning goals are... "
          />   
          <button className="btn btn-primary" type="submit">Sign Up</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
        <p class="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
      </div>
    )
  }
}


