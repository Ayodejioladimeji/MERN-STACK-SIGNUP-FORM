import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
        fullName:"",
        userName:"",
        email:"",
        textarea:"",
        password:"",
    }

    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeText = this.changeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName = (event)=>{
      this.setState({
        fullName:event.target.value
      })
  }
  
  changeUserName = (event)=>{
    this.setState({
      userName:event.target.value
    })
  }

  changeEmail = (event)=>{
    this.setState({
      email:event.target.value
    })
  }

  changePassword = (event)=>{
    this.setState({
      password:event.target.value
    })
  }

  changeText = (event)=>{
    this.setState({
      textarea:event.target.value
    })
  }

  onSubmit=(event)=>{
    event.preventDefault();

    const registered = {
      fullName:this.state.fullName,
      userName:this.state.userName,
      email:this.state.email,
      textarea:this.state.textarea,
      password:this.state.password
    }

    // sending the form to the backend
    axios.post('http://localhost:4000/app/signup', registered)
    .then(response => console.log(response.data))

    // window.location = '/'

    this.setState({
      fullName:"",
      userName:"",
      email:"",
      textarea:"",
      password:""
    })
  }
  

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="fullname" onChange={this.changeFullName} value={this.state.fullName} className="form-group form-control"/>
              <input type="text" placeholder="userName" onChange={this.changeUserName} value={this.state.userName} className="form-group form-control"/>
              <input type="text" placeholder="email" onChange={this.changeEmail} value={this.state.email} className="form-group form-control"/>
              <input type="password" placeholder="password" onChange={this.changePassword} value={this.state.password} className="form-group form-control"/>
              <textarea className="form-control mb-4" onChange={this.changeText} value={this.state.textarea} placeholder="enter your text" rows="3"></textarea>
              <input type="submit" className="btn btn-danger btn-block" valur="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App