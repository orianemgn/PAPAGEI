import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './layout/Navbar'
//import UsersList from './UsersList'

export default class Profile extends Component{


  render() {
    return (
      <div>
        <Navbar/>
        <h1>You are on profil user</h1>
        <li><Link to="/aboutme">About me</Link></li>
        <li><Link to="/languages">Languages</Link></li>
      </div>
      
      
    )
  }
}