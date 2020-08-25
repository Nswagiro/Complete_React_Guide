import React, { Component } from "react"
import UserOutput from '../UserOutput/UserOutput';
import UserInput from '../UserInput/UserInput'
 

class Wap extends Component {
    state = {
      Username : 'Olivia',
      
    }
    handleChange = (event) => {
      this.setState({
        Username : event.target.value
      })
    }
  
    render () {
      return (
        <div>
          <UserOutput 
             UserName = {this.state.Username}
  
          />
          <UserOutput 
             UserName = {this.state.Username}
          />
          <UserOutput 
             UserName = {'Wilson'}
          />
  
          <UserInput 
             change = {this.handleChange}
             User = {this.state.Username}
          />
          
        </div>
      )
    }
  }
  export default Wap;