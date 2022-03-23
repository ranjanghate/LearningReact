import React, { Component } from 'react'

export class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }

  render() {

    // IF-ELSE
    // if(this.state.isLoggedIn) {
    //   return(
    //     <div> Welcome ! Thank you for Loggin </div>
    //   )
    // } else {
    //   return (
    //     <div> Welcome Guest </div>
    //   )
    // }

    // ELEMENT VARIABLS 
    // let message;
    // if(this.state.isLoggedIn) {
    //   message = 'Welcome ! Thankyou for login'
    // } else {
    //   message = 'Welcome Guest'
    // }

    // return (
    //   <div> {message} </div>
    // )

    // TERNORY CONDITIONAL RENDERING
    // return(
    //   this.state.isLoggedIn ?
    //   <div> Welcome ! Thankyou For Login </div> :
    //   <div> Welcome Guest </div>
    // )

    // SHORT CIRCUIT OPERATOR
    return this.state.isLoggedIn && (<div> Welcome ! Thankyou For Login </div>)
  }
}

export default UserGreeting